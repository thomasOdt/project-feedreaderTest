/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Check if URL is defined and isn't empty
        it('has URL', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        // Check if name is defined and isn't empty
        it('has name', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    describe('The menu', function() {

        // Check if menu is hidden on default
        it('Is hidden by default', function() {
            expect($("body").hasClass("menu-hidden")).not.toBe(0);
        });

        // Check if menu is shown on click and hidden again by next click.
        it('menu changes on click', function() {
            $(".menu-icon-link").click(),
                expect($("body").hasClass("menu-hidden")).not.toBe(!0);
            $(".menu-icon-link").click(),
                expect($("body").hasClass("menu-hidden")).toBe(!0);
        });
    });

    describe('Initial Entries', function() {
        // Check with async function if there is at least one element
        beforeEach(function(e) {
            loadFeed(0, e)
        }),
        it('entry had at least one element', function() {
            expect($(".entry").length).not.toBe(0)
        });
     });

    // Check with async function if elements aren't the same.
    describe('New Feed Selection', function() {
        beforeEach(function(e) {
            loadFeed(0), prevTopPost = $(".entry").eq(0).html(), loadFeed(1, e)
        }),
        it("check for changes", function() {
            expect($(".entry").eq(0).html()).not.toEqual(prevTopPost)
        })
    });


}());
