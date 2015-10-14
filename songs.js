var songs = [];
var badCharPosition;
var songlist = document.getElementById("results");
var songsToTextArea;

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songArray = songs;

songs.unshift("Hey, Big Programmer > by Data Man on the album Git Hell");
songs.push("Old Five and Dimers > by Jug Head on the album Big Thugs");

// console.log(songArray);

for (var i = 0; i < songs.length; i++) {
	console.log(songs[i]);
	// console.log("length of entry = ", songs[i].length);

	// badCharPosition = songs[i].indexOf(">"); // locates position of ">"
	// console.log("badCharPosition", badCharPosition);

	songs[i] = songs[i].replace(/[^A-Za-z" "0-9>-]/g, "");
	songs[i] = songs[i].replace(" > ", " - ");
	// songs[i] = songs[i].replace(" ", "");

// songz = songArray.join("\n");
// replace(",", "<br>");
songlist.innerHTML += "<blockquote>" + songs[i] + "</blockquote>"; // only shows last song
	// songlist.innerHTML = songArray;
// songlist.innerHTML = songArray; // shows all songs with comma separation -- NOT 1 per line
// songlist.innerHTML = document.write(songs[i]);
// songlist.innerHTML = document.write("<br>");

}
console.log(songArray);


