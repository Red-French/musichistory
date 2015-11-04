requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min"
  }
});

require(
  ["songs.json", "more-songs.json"], 
  function($, ajax) {

  }
);


// require js is ALL callback functions
// *** keep this file as clean as possible
// *** put logic, event handlers, etc in another file!!!

//require(["songCollection"]), 
//function($) {  // these are .js files --> ".js" is not required


// ["bread"]), function(bread) {
// }

