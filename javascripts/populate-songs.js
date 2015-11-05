define(["jquery"],
  function($) {
  console.log("inside populate-songs");
  return {
    getMeSomeData: function(callbackFunctionReference) {
      // console.log("inside function");
      $.ajax({url: "javascripts/songArray.json"
      }).done(function(firstSongsReturned) {
        callbackFunctionReference(firstSongsReturned);
      })
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



