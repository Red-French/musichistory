requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "firebase": "../lib/bower_components/firebase/firebase"
  },
  shim: { // WHAT'S THIS?
  "bootstrap": ["jquery"],
  "firebase": {
    exports: "Firebase"
	}
  }
});

require(
  ["hbs", "lodash", "firebase", "populate-songs", "add-songs", "delete-song"], 
  function(Handlebars, _, Firebase, populate_songs, add_songs, delete_song) {

// LOAD SONG LIST ON PAGE LOAD
	populate_songs.getMeSomeData(function(songs) {
		console.log("inside entry.js = ", songs);
	    require(["hbs!../templates/songs"], function(songTemplate) {
	    	$("#results").html(songTemplate(songs));
		});

// LOAD ARTIST DROPDOWN SELECT OPTIONS ON PAGE LOAD
	populate_songs.loadSelectOptions(songs);

	});


// Create a reference to your Firebase database
	var myFirebaseRef = new Firebase("https://nss-demo-instructor.firebaseio.com");

// Listen for when anything changes on the "songs" key
	myFirebaseRef.child("songs").on("value", function(snapshot) {

// Store the entire songs key in a local variable
	var allSongsObject = snapshot.val();

// Bind the allSongsObject to the song list Handlebar template

// Bind the unique artists to the artists template

// Bind the unique albums to the albums template

	});
});





// require(
// 	["hbs!../templates/songs"], 
// 	function(songTemplate) {
// 	$("#results").html(songTemplate(songs));	
// });


// function loopSongs(songObject) { // Steve example in class

// }


	// function addSong(songArray) {
	//   console.log("in addSong function");
	//   console.log(songArray);
	//   var results = $("#results");
	//   // for (var i = 0; i < songArray.length; i++) {
	//   songArray.songs.forEach(function(song){
	//   var string = "<div>" + song.title + " " + song.artist + " " + song.album + "<input class='clear-message' type='button' value='Delete'>" + "</div>";
	//   results.append(string);
	//   });
	//   // $("#results").after("<button type='button' id='moreButton'>More</button>");
	// }


// James explaining BEGIN
// require(
//   ["jquery", "ajax", "songs"], 
//   function($, ajax, songs) {

//   }
// );

// define(['jquery', 'ajax'], function (){
// 	var cat = "jojo"

// 	return {
// 		someKey: function () {
// 			//does something
// 			console.log(cat)
// 		}
// 	}
// })

// require(['awesome-songs'], function (awesome_songs){

// 	awesome_songs.someKey(); // can call key/value from file awesome-songs

// })
// James explaining END


// require js is ALL callback functions
// *** keep this file as clean as possible
// *** put logic, event handlers, etc in another file!!!

//require(["songCollection"]), 
//function($) {  // these are .js files --> ".js" is not required


// ["bread"]), function(bread) {
// }

