define(["jquery", "populate-songs"], function($, populate_songs) {
// var songDetail = "";
// var songs = [];
var results = $("#results");
console.log("inside add-songs");
// var htmlString = $("#results").html();
// console.log("htmlString = ", htmlString);
// var newSongArray = [];

// EVENT LISTENER FOR 'ADD MUSIC' BUTTON IN NAV BAR (DISPLAYS FORM FOR USER SONG-DATA INPUT)
	$("#add").click(function(e) {
		htmlString = $("#results").html();
		results.html("<p>Song: <input id='newTune' class='inputButton' type='text' value=''></p>" + "<p>Artist: <input id='newArtist' class='inputButton' type='text' value=''></p>" + "<p>Album: <input id='newAlbum' class='inputButton' type='text' value=''></p>" + "<p><input class='addToSongList' type='button' value='Add Song to List'></p>");
	});


// EVENT LISTENER FOR 'ADD SONG TO LIST' BUTTON (DYNAMICALLY CREATED ABOVE)
	// $(".addToSongList").click(function(e) {
	document.querySelector("body").addEventListener("click", function(event) {
		var newSong = {
			"title": $("#newTune").val(),
			"artist": $("#newArtist").val(),
			"album": $("#newAlbum").val()
		}

		if (event.target.className === "addToSongList") {
	    	// console.log(event.target.parentElement);
			console.log("inside addToSongList-click function");
			$.ajax({
				url: "https://crackling-torch-4807.firebaseio.com/songs.json",
				method: "POST",
				data: JSON.stringify(newSong)









// WHY WILL SELECT OPTIONS NOT RE-LOAD?????

			}).done(function(songs) {  // 'SONGS' NEEDS TO BE THE FIREBASE JSON FILE INFO
			console.log("'done' function in 'addToSongList' body click event");
				populate_songs.loadSelectOptions(songs);  // WHY IS THIS NOT WORKING?
				console.log(songs);
			});
		};
	});











	// EVENT LISTENER FOR 'LIST MUSIC' BUTTON TO SHOW SONG LIST IN DIV#RESULTS
	$("#list").click(function() {
		populate_songs.getMeSomeData(function(songs) {
		    require(["hbs!../templates/songs"], function(songTemplate) {
		    	$("#results").html(songTemplate(songs));
			});
		});
	});
});

// LOAD CHOSEN SONG INTO DIV#RESULTS
	$("#filterButton").click(function(){
		console.log("filter click");
		var chosenArtist = $("#artist").val();
		console.log(chosenArtist);
		var chosenAlbum = $("#album").val();
		console.log(chosenAlbum);
		var chosenSong = $("#songTitle").val();
		console.log(chosenSong);
	});


// 	$.ajax({
// 		url: "https://crackling-torch-4807.firebaseio.com/.json",
// 		method: "POST",
// 		data: JSON.stringify(newSong)
// 	}).done(function() {
// 		console.log("list-click");
// 	});
// });

	
