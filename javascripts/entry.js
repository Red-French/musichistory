requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min"
  }
});

require(
  ["populate-songs", "get-more-songs"], 
  function(populate_songs, get_more_songs) {
  	populate_songs.getMeSomeData(addSong),
  	get_more_songs.getMeSomeData(addSong);


	function addSong(songArray) {
	  console.log("in addSong function");
	  console.log(songArray);
	  var results = $("#results");
	  // for (var i = 0; i < songArray.length; i++) {
	  songArray.songs.forEach(function(song){
	  var string = "<div>" + song.title + " " + song.artist + " " + song.album + "<input class='clear-message' type='button' value='Delete'>" + "</div>";
	  results.append(string);
	  });
	  // $("#results").after("<button type='button' id='moreButton'>More</button>");
	}
  }
);

  // DELETE INDIVIDUAL SONGS
  document.querySelector("body").addEventListener("click", function(event) {
    // console.log(event);
    if (event.target.className === "clear-message") {
      // console.log("You clicked on `Delete Message`");
      // console.log(event.target.parentElement);
      // console.log("events:", event);
      // event.target.parentElement.innerHTML = "";
      event.target.parentElement.setAttribute("hidden", true);
    }
    // if (messageBoard.innerHTML.length < 1) {     // WORK ON THIS
    //  clearAll.disabled = true;
    // }
    $("#moreButton").click(function() {
      $.ajax({
      url: "get-more-songs.js"
    }).done(addSong);
    });
  });

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

