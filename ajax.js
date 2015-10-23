$(document).ready(function() {

  // NOTES:
   function contentsOfTheFile(songList) {
      console.log("inside function");
      // console.log(songList.songs); // reference ajax data now as songList.songs
  //    console.log(songList.more-songs); // reference ajax data now as songList.more-songs
  // execute any code you want --->
   // for (var i = 0; i < songList; i++) {
   //   var currentSong = songList.songs[i];
   //   console.log(currentSong);
   // }
  }

    $.ajax({
      url: "songArray.json",
      error: function (a, b, c) { // will catch thrown errors - see JQuery documentation
        console.log(b); // log errors
        console.log(c); // log errors
      }
    }).done(function(contentsOfTheFile) {
      console.log("the contents of songArray");
      console.log(contentsOfTheFile);
   });

});

// ++++++++++++++++++++++++++++++++
var songs = [];
// var badCharPosition;
var songlist = document.getElementById("results");
var songsToTextArea;



for (var i = 0; i < songs.length; i++) {
  console.log(songs[i]);
  // console.log("length of entry = ", songs[i].length);

  // badCharPosition = songs[i].indexOf(">"); // locates position of ">"
  // console.log("badCharPosition", badCharPosition);

  songs[i] = songs[i].replace(/[^A-Za-z" "0-9>-]/g, "");
  songs[i] = songs[i].replace(" > ", " - ");
  // songs[i] = songs[i].replace(" ", "");

songlist.innerHTML += "<blockquote>" + songs[i] + "</blockquote>"; // only shows last song
}

