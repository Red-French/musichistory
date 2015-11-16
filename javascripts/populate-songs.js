define(["jquery"],
  function($) {
  console.log("inside populate-songs");

// CALLED FROM ENTRY.JS TO LOAD SONG LIST ON PAGE LOAD
  return {
    getMeSomeData: function(callbackFunctionReference) {
      $.ajax({url: "https://crackling-torch-4807.firebaseio.com/.json"
      }).done(function(firstSongsReturned) {
        callbackFunctionReference(firstSongsReturned);
      })
    },
// CALLED FROM ADD-SONGS.JS TO RE-LOAD SELECT OPTIONS WHEN 'ADD SONG TO LIST' BUTTON IS CLICKED
    loadSelectOptions: function(songs) {
      console.log("inside loadSelectOptions!!!!");

    // LOAD ARTIST DROPDOWN
        require(["hbs!../templates/artist"], function(dropdownTemplate) {
          $("#artist").append(dropdownTemplate(songs));
      });

  // LOAD ALBUM DROPDOWN
      require(["hbs!../templates/album"], function(dropdownTemplate) {
          $("#album").append(dropdownTemplate(songs));
      });

  //  LOAD SONG DROPDOWN (NOT CURRENTLY USED)
      require(["hbs!../templates/title"], function(dropdownTemplate) {
          $("#songTitle").append(dropdownTemplate(songs));
      });
    }
  }

})





//////////Luke Wrote This////////////////
// function add(a, b) {  --> called from callbackFunction below
//   returns a + b;
// }

// add(1, 2);

// function math(a, b, callbackFunction) {  --> a=1, b=2, cbf=add function
//   callbackFunction(a, b);  --> perform add(a, b)
// }

// math(1, 2, add);  --> perform math function, pass in 1, 2, add function
///////^^^Luke Wrote This^^^/////////////



    // define( [], function() {
    // console.log("inside populate-songs.js");
    //   $.ajax({
    //       url: "javascripts/songArray.json",
    //     }).done(function(songArray) {
    //       addSong(songArray);
    //       // console.log("the contents of songArray:");
    //       // console.log(songArray);
    //     });





///////////////////////////////////////////////////////////////////////////
// // JACOB'S FUNCTION (forEach) -- THANK YOU!
// function printString(songsObj){
//  var songbox = $("#songbox");
//    songsObj.songs.forEach(function(song){
//      var string = "<div>" + songs.title + " " + songs.artist + " " + songs.album + "</div>";
//        songbox.append(string);
//      });
// }


//   return {
//     printString: printString
//   };
// });



