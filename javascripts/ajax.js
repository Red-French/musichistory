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
      url: "javascripts/songArray.json",
      error: function (a, b, c) { // will catch thrown errors - see JQuery documentation
        console.log(b); // log errors
        console.log(c); // log errors
      }
    }).done(function(songArray) {
      addSong(songArray);
      // console.log("the contents of songArray:");
      // console.log(songArray);
   });


    // $.ajax({
    //   url: "more-songs.json",
    // }).done(function(songArray) {
    //   addSong(songArray);
    // });




// JACOB'S FUNCTION -- THANK YOU!
function printString(songsObj){
 var songbox = $("#songbox");
   songsObj.songs.forEach(function(song){
     var string = "<div>" + songs.title + " " + songs.artist + " " + songs.album + "</div>";
       songbox.append(string);
     });
}

// var songlist = document.getElementById("results");
  function addSong(songArray) {
    console.log("in addSong function");
    console.log(songArray);
    var results = $("#results");
    // for (var i = 0; i < songArray.length; i++) {
    songArray.songs.forEach(function(song){
    var string = "<div>" + song.title + " " + song.artist + " " + song.album + "<input class='clear-message' type='button' value='Delete'>" + "</div>";
    results.append(string);

// <input class='clear-message' type='button' value='Delete'>

      // songArray[i] = songArray[i].replace(/[^A-Za-z" "0-9>-]/g, ""); // ERROR: i IS NOT DEFINED
      // songArray[i] = songArray[i].replace(" > ", " - ");              // ERROR: i IS NOT DEFINED

      // songDetail += "<blockquote>" + songArray[i] + "</blockquote>"; // for Jquery
      // $(songlist).empty();
      // results.html(songDetail); // DISPLAY SONG LIST
    // }
      });
        $("#results").after("<button type='button' id='moreButton'>More</button>");
  }
// var masterSongList = "<div>" + song.title + " " + song.artist + " " + song.album + "<br></div>";

// <input class='clear-message' type='button' value='Delete'>

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
      url: "more-songs.json"
    }).done(addSong);
    });
  });
});




