define(["jquery", "populate-songs"], function() {
// var songDetail = "";
// var songs = [];
var results = $("#results");
console.log("inside add-songs");
// var htmlString = $("#results").html();
// console.log("htmlString = ", htmlString);
// var newSongArray = [];

	$("#add").click(function(e) {
		htmlString = $("#results").html();
		results.html("<p>Song: <input id='newTune' class='inputButton' type='text' value=''></p>" + "<p>Artist: <input id='newArtist' class='inputButton' type='text' value=''></p>" + "<p>Album: <input id='newAlbum' class='inputButton' type='text' value=''></p>" + "<p><input class='addToSongList' type='button' value='Add Song to List'></p>");
	});


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
			}).done(function(addedSong) {
				// selectedArtist = "";
				// selectedAlbum = "";
				// selectedYear = "";
				console.log(addedSong);
			});
		};

	});

	// SHOWS SONG LIST)
	$("#list").click(function() {
	// WHY NOT AN AJAX CALL??
	// HOW WOULD I DO THIS USING SHOW/HIDE??
	    require(["hbs!../templates/songs"], function(songTemplate) {  // ??? NOT WORKING
	    // NEEDS INSERTING IN TEMPLATE
	    $("#results").load("https://crackling-torch-4807.firebaseio.com/songs.json");
  		});
	});
});


	$("#filterButton").click(function(){
		console.log("filter click");
	});




// 	$.ajax({
// 		url: "https://crackling-torch-4807.firebaseio.com/songs.json",
// 		method: "POST",
// 		// data: JSON.stringify(addedSong)
// 	}).done(function() {
// 		console.log("list-click");
// 	});
// });


    // console.log("events:", event);
    // event.target.parentElement.innerHTML = "";
    // event.target.parentElement.setAttribute("hidden", true);



	// // DISPLAYS ADD-SONG FORM VIA 'ADD' BUTTON IN NAV
	// $("#add").click(function() {
	// htmlString = $("#results").html();
	// // console.log("in add-click", htmlString);
	// results.html("<p>Song: <input id='newTune' class='inputButton' type='text' value=''></p>" + "<p>Artist: <input id='newArtist' class='inputButton' type='text' value=''></p>" + "<p>Album: <input id='newAlbum' class='inputButton' type='text' value=''></p>" + "<p><input class='addToSongList' type='button' value='Add Song to List'></p>");
	// });

// 	// SHOWS SONG LIST)
// 	$("#list").click(function() {
//   	console.log("list clicked");
// 	// results.html(htmlString);

// 	$.ajax({
// 		url: "https://crackling-torch-4807.firebaseio.com/.json",
// 		method: "POST",
// 		data: JSON.stringify(newSong)
// 	}).done(function() {
// 		console.log("list-click");
// 	});
// });

 //      function songIWantToAdd(dog) {
 //        for (var i = 0; i < songArray.songs.length; i++) {
 //          console.log("songs2", songArray.songs[i]);
 //          newSongArray[i] = "<h1>" + songArray.songs[i] + "</h1>";
 //          $("#output").append(newSongArray[i]);
 //          songsToAdd(songArray.songs[i]); 
          
 //        } 
 //      }

	
