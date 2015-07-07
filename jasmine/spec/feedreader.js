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


        /* This test loops through allfeeds object
         *  and ensures it has a URL defined
         * and that the URL is not empty.
         */
           
            it('has url', function(){
                var i=0;
                for( i; i<allFeeds.length;i++){
                    console.log(allFeeds[i].url);  
                    expect(allFeeds[i].url).toBeDefined();
                    expect(allFeeds[i].url).not.toBeNull();
                    expect(allFeeds[i].url).not.toBe(' ');
                }
            });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

           
             it('has name', function(){
                var j=0;
                for(j;j<allFeeds.length;j++){
                    expect(allFeeds[j].name).toBeDefined();
                    expect(allFeeds[j].name).not.toBeNull();
                    expect(allFeeds[j].name).not.toBe(' ');
               }
             });

    });


    /* A new test suite named "The menu" */

        /* A test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

   describe('The menu', function(){

         it('is hidden', function(){
            menuIcon = $('menu-hidden');

            expect(menuIcon).toBeTruthy();
         });

         it('changes when clicked', function(){
            menuIcon = $('menu-hidden');
            menuIcon.click();
            expect(menuIcon).toBeTruthy(); 
            menuIcon.click();
            expect('menu').toBeTruthy();
         });

   });      

    /* A new test suite named "Initial Entries" */

        /* Aa test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    describe('Initial Entries', function(){
            
            var NewFeed1=0;
            
            beforeEach(function(done){
                loadFeed(0);
                NewFeed1 = $('feed').html();
                done();
            });
            
            console.log(NewFeed1);

            it('load at least 1 entry', function(){
                 expect(NewFeed1).not.toBeNull();
            });



         });

    /* Last test suite named "New Feed Selection"

        /* This test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         var n=0;
         var NewFeed = null;
         var oldContent = null;


         describe('New Feed Selection', function(){
            
            beforeEach(function(done){
                loadFeed(0,function(){
                    oldContent= $('.header-title').html();
                    console.log(oldContent);
                    
            }); done();
                
              loadFeed(n+1,done);
              NewFeed = $('.header-title').html();
              console.log(NewFeed+'log of the new Feed')   
              
                
           // });
                 
                
            });

            it('content changes for new feed', function(){
                console.log(NewFeed,oldContent);
                expect(NewFeed).not.toBe(oldContent);
            });
            done();
         });
});
