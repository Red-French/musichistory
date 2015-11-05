define(["jquery"], function() {
var songDetail = "";
var songs = [];
var results = $("#results");

	// DISPLAYS ADD-SONG FORM VIA 'ADD' BUTTON IN NAV
	$("#add").click(function() {
	// console.log("add clicked");
	results.html("<p>Song: <input id='newTune' class='inputButton' type='text' value=''></p>" + "<p>Artist: <input id='newArtist' class='inputButton' type='text' value=''></p>" + "<p>Album: <input id='newAlbum' class='inputButton' type='text' value=''></p>" + "<p><input class='addToSongList' type='button' value='Add Song to List'></p>");
	});


	// SHOWS SONG LIST)
	$("#list").click(function() {
  	console.log("list clicked");
  	results.html(songArray);
  	});


	// 	ADDS USER INPUT TO SONG ARRAY
	// function addSong(songArray) {
	// console.log("in addSong function");
	// for (var i = 0; i < songs.length; i++) {
	// 	songs[i] = songs[i].replace(/[^A-Za-z" "0-9>-]/g, "");
	// 	songs[i] = songs[i].replace(" > ", " - ");

	// 	// results.innerHTML += "<blockquote>" + songs[i] + "</blockquote>"; // replaced by JQuery below
	// 	songDetail += "<blockquote>" + songs[i] + "</blockquote>"; // for Jquery
	// 	// $(results).empty();
	// 	results.html(songDetail); // DISPLAY SONG LIST
	// 	}
	// }


	// 	ADDS USER INPUT TO SONG ARRAY
	function addSong(songArray) {
	  console.log("in addSong function");
	  var results = $("#results");
	  // for (var i = 0; i < songArray.length; i++) {
	  songArray.songs.forEach(function(song){
	  var string = "<div>" + song.title + " " + song.artist + " " + song.album + "<input class='clear-message' type='button' value='Delete'>" + "</div>";
	  results.append(string);
	  });
	  // $("#results").after("<button type='button' id='moreButton'>More</button>");
	}



	// 'ADD SONG TO LIST' BUTTON (DYNAMICALLY PRODUCED BY 'ADD' BUTTON (IN NAV)
	// ADDS SONG TO SONG ARRAY
	// document.querySelector("body").addEventListener("click", function(event) {
	$("#body").click(function() { // JQUERY REPLACES JS LINE ABOVE
		// console.log(event);
		if (event.target.className === "addToSongList") {
		var newTune = "";
		var newArtist = "";
		var newAlbum = "";
			newTune = document.getElementById("newTune");
			newTune = $("#newTune").val();
			console.log(newTune);
			newArtist = $("newArtist").val();
			console.log(newArtist);
			newAlbum = $("newAlbum").val();
			console.log(newAlbum);
			songs.push($("#newTune").val() + " by " + $("newArtist").val() + " on the album " + $("newAlbum").val());
			songDetail = songDetail + "<blockquote>" + songs.slice(-1)[0] + "</blockquote>";
			results.html(songDetail);
			// console.log(songs.slice(-1)[0]);
			// console.log("array = ", songs);
			// results.innerHTML = ""; // TURN TO JQUERY
			// $(results).hide(); // 	HIDE SONG LIST
			// $(results).empty();
			// addSong();
	  	}
	});
});

