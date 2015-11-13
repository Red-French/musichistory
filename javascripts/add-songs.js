define(["jquery", "lodash", "populate-songs"], function($, _, populate_songs) {
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

// ??????WHY WILL SELECT OPTIONS NOT RE-LOAD?????
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
console.log("inside list-click = ", songs);
			});
		});
	});

var chosenArtist;
var chosenAlbum;

// LOAD CHOSEN SONG INTO DIV#RESULTS
	$("#filterButton").click(function(){
		populate_songs.getMeSomeData(function(songs) {
console.log("inside filter-click = ", songs);
		chosenArtist = $("#artist").val();
		chosenAlbum = $("#album").val();

	// lodash
	// define(["lodash"], function(_) {	  IF I'M DEALING W/ AN ARRAY, LODASH NEEDS TO BE DEFINED AS AN ARRAY????
			return (function() {  // WHY A RETURN???
				console.log("enter return!!");
				populate_songs.getMeSomeData(function(songs) {
	console.log("inside filter-click 'return' = ", songs);


// CREATES AN ARRAY OF THE SONGS OBJECT (ALL KEY:VALUES) --> DONE PURELY FOR MY PLEASURE!
var totalArray = jQuery.makeArray(songs);
console.log("totalArray = ", totalArray);




// +++++++ 	BEGIN MOVING OBJECTS OF 'SONGS' OBJECT INTO SEPARATE ARRAYS +++++++++ //

// MOVE SONG TITLES INTO AN ARRAY
var songTitleArray = [];  // create new array to move song titles into
	for(var key in songs.songs){  // for each song object key
		// console.log(songs.songs[key].title);
		songTitleArray.push(songs.songs[key].title);  // push the song title of that key into the created array
	}
console.log("songTitleArray (entire array) = ", songTitleArray);


// MOVE ARTIST NAMES INTO AN ARRAY
var artistArray = [];  // create new array to move artists into
	for(var key in songs.songs){  // for each song object key
		// console.log(songs.songs[key].artist);  
		artistArray.push(songs.songs[key].artist);  // push the artist of that key into the created array
	}
console.log("artistArray (entire array) = ", artistArray);


// MOVE ALBUM TITLES INTO AN ARRAY
var albumArray = [];  // create new array to move album titles into
	for (var key in songs.songs){  //  for each song object key
		// console.log(songs.songs[key].album);
		albumArray.push(songs.songs[key].album);  // push the album of that key into the created array
	}
console.log("albumArray (entire array) = ", albumArray);

// +++++++ END MOVING OBJECTS OF 'SONGS' OBJECT INTO SEPARATE ARRAYS +++++++++ //




// +++++++ BEGIN PULLING SPECIFIC INFO FROM ARRAYS +++++++++ //


// PLUCK THE ARTISTS FROM THE WHOLE OBJECT AND MOVE THEM INTO AN ARRAY
var pluckedArtists = _.chain(songs.songs)  // chain methods together for data.songs
					//.uniq("album.name") // for each unique album name
					.pluck("artist")  // pluck the album's....
					.value();  // name (value)
					console.log("From 'songs' OBJECT, 'plucked' artists = ", pluckedArtists);


// non-chained syntax:
	// UNIQUE ARTISTS IN ARTIST ARRAY
var uniqueArtists = _.uniq(artistArray);  // .uniq will NOT work on an object, so moved object to an array 
console.log("From artistArray, uniqueArtists = ", uniqueArtists);


// UNIQUE ALBUMS IN ALBUM ARRAY
var uniqueAlbums = _.uniq(albumArray);  // .uniq will NOT work on an object, so moved object to an array 
console.log("From albumArray, uniqueAlbums = ", uniqueAlbums);


// UNIQUE SONGS IN ALBUM ARRAY
var uniqueSongs = _.uniq(songTitleArray);  // .uniq will NOT work on an object, so moved object to an array 
console.log("From songTitleArray, uniqueSongs = ", uniqueSongs);

	// 			var justTheArtists = _.pluck(uniqueArtists, "artist");
	// console.log("justTheArtists", justTheArtists);



// +++++++ END PULLING SPECIFIC INFO FROM ARRAYS +++++++++ //


// var filteredData =	_.chain(songs.songs)
// 					.filter(songs => songs.artist === chosenArtist)
// 					// .unique("album.name").pluck("album").value();))
// console.log("chosenArtist = ", chosenArtist);
// console.log("filteredData", filteredData);




// LOOP (W/ FOR-IN LOOP) THROUGH SONGLIST ARRAY-OBJECT TO FIND INFO THAT MATCHES USER'S CHOICE
if (chosenArtist !== "Choose Artist") {
console.log("chosenArtist is = ", chosenArtist);
	for (var property in songs.songs) {
			// console.log(songs.songs[property]);
		if (songs.songs[property].artist === chosenArtist) {
			console.log("'for-in' says artist = ", chosenArtist);
			console.log("songs.songs[property] = ", songs.songs[property]);

			var output = {  // 'dummy' object to store info of song chosen due to handlebars looking for 'songs'.
				songs: {
				}
			}

			output.songs[property] = songs.songs[property]; // moves chosen song info into 'dummy' object created above.
			console.log(songs.songs[property]);
			console.log("output = ", output);

			require(["hbs!../templates/songs"], function(songTemplate) {
	    	$("#results").html(songTemplate(output));

			});
		};
	};
};

// LOOP (W/ FOR-IN LOOP) THROUGH SONGLIST ARRAY-OBJECT TO FIND INFO THAT MATCHES USER'S CHOICE
if (chosenAlbum !== "Choose Album") {
console.log("chosenAlbum is = ", chosenAlbum);
	for (var property in songs.songs) {
			// console.log(songs.songs[property]);
		if (songs.songs[property].album === chosenAlbum) {
			console.log("'for-in' says album = ", chosenAlbum);
			console.log("songs.songs[property] = ", songs.songs[property]);

			var output = {  // 'dummy' object to store info of song chosen due to handlebars looking for 'songs'.
				songs: {
				}
			}

			output.songs[property] = songs.songs[property]; // moves chosen song info into 'dummy' object created above.
			console.log(songs.songs[property]);
			console.log("output = ", output);

			require(["hbs!../templates/songs"], function(songTemplate) {
	    	$("#results").html(songTemplate(output));

			});
		};
	};
};



// BELOW IS NOT USED
				// chained methods syntax: -- for notes only -- code below not used in this program
				var uniqueAlbums = _.chain(songs.songs)  // chain methods together for data.songs
									.uniq("album.name") // for each unique album name
									.pluck("album")  // pluck the album's....
									.value();  // name (value)


				// return {
				// 	uniqueArtists: justTheArtists,
				// 	uniqueAlbums: uniqueAlbums,
				// 	filteredData: filteredData
				// }

				});
			}());
		});
	});
});
