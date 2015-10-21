var songs = [];
// var badCharPosition;
var songlist = document.getElementById("results");
var results;


songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// songArray = songs;

songs.unshift("Hey, Big Programmer > by Data Man on the album Git Hell");
songs.push("Old Five and Dimers > by Jug Head on the album Big Thugs");

// console.log(songArray);
addSong();
function addSong(newSong) {
for (var i = 0; i < songs.length; i++) {
	// console.log(songs[i]);
	// console.log("length of entry = ", songs[i].length);

	// badCharPosition = songs[i].indexOf(">"); // locates position of ">"
	// console.log("badCharPosition", badCharPosition);

	songs[i] = songs[i].replace(/[^A-Za-z" "0-9>-]/g, "");
	songs[i] = songs[i].replace(" > ", " - ");
	// songs[i] = songs[i].replace(" ", "");

// songz = songArray.join("\n");
// replace(",", "<br>");
// songlist.innerHTML += "<blockquote>" + results + "</blockquote>";

songlist.innerHTML += "<blockquote>" + songs[i] + "</blockquote>";

	// songlist.innerHTML = songArray;
// songlist.innerHTML = songArray; // shows all songs with comma separation -- NOT 1 per line
// songlist.innerHTML = document.write(songs[i]);
// songlist.innerHTML = document.write("<br>");

}
// console.log(songArray);
}

// 	'ADD' BUTTON (IN NAV) EVENT LISTENER DISPLAYS FORM AND HIDES SONGLIST
document.getElementById("add").addEventListener("click", function() {
	console.log("add link clicked");
	songlist.innerHTML = "<p>Song: <input id='newSong' class='inputButton' type='text' value=''></p>" + "<p>Artist: <input id='newArtist' class='inputButton' type='text' value=''></p>" + "<p>Album: <input id='newAlbum' class='inputButton' type='text' value=''></p>" + "<p><input class='addToSongList' type='button' value='Add Song to List'></p>";
});

// 'LIST' BUTTON (IN NAV) EVENT LISTENER DISPLAYS SONGLIST AND HIDES FORM
document.getElementById("list").addEventListener("click", function() {
	console.log("list link clicked");
	songlist.innerHTML = "";
	for (var i = 0; i < songs.length; i++) {
		songlist.innerHTML += "<blockquote>" + songs[i] + "</blockquote>";
	}
});

// 'ADD SONG TO LIST' BUTTON (DYNAMICALLY PRODUCED BY 'ADD' BUTTON (IN NAV)
// ADDS SONG TO SONG ARRAY
document.querySelector("body").addEventListener("click", function(event) {
  console.log(event);

  if (event.target.className === "addToSongList") {
    console.log("add song to list clicked");
    newSong = document.getElementById("newSong");
    newSong = newSong.value;
    newArtist = newArtist.value;
    newAlbum = newAlbum.value;
    songs.push(newSong + " by " + newArtist + " on the album " + newAlbum);
    console.log(songs);
    songlist.innerHTML = "";
    addSong(newSong);
  }
});




