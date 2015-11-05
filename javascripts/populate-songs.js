
// define(["jquery"], function($) {
//   return {
//     getMeSomeData: function(callbackFunctionReference) {
//       $.ajax({...}).done(function(jsonDataSentByjQuery) {
//         callbackFunctionReference(jsonDataSentByjQuery);
//       }
//     }
//   }
// });

define(["jquery"],
  function($) {
  console.log("inside populate-songs");
  return {
    getMeSomeData: function(callbackFunctionReference) {
      console.log("inside function");
      $.ajax({url: "javascripts/songArray.json",
      }).done(function(firstSongsReturned) {
        callbackFunctionReference(firstSongsReturned);
      })  
    }
  }
})


//////////Luke Wrote This////////////////
// function add(a, b) {
//   returns a + b;
// }

// add(1, 2);

// function math(a, b, callbackFunction) {
//   callbackFunction(a, b);
// }

// math(1, 2, add);
///////^^^Luke Wrote This^^^/////////////



// function callme (numA, callback) {
//   var newNum = numA * 10;
//   callback(newNum);
// }

// function later (numB) {
//   console.log("final", numB * 8);
// }

// callme(5, later);


// });

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



