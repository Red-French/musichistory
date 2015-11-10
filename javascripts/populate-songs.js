define(["jquery"],
  function($) {
  console.log("inside populate-songs");

// put .change on select boxes

// TRYING TO POPULATE DROPDOWN BOXES
// TRYING TO POPULATE DROPDOWN BOXES
// TRYING TO POPULATE DROPDOWN BOXES

  // $.ajax({url: "https://crackling-torch-4807.firebaseio.com/songs.json"
  // }).done(function() {
  //   $.each(songs, function(i, item){ // songs??
  //     console.log("inside ajax");
  //   $("#artist"+item.artist).val(item.value);
  //   }); 
  // })


// $('#artist').load("https://crackling-torch-4807.firebaseio.com/songs.json");



// $.getJSON("https://crackling-torch-4807.firebaseio.com/songs.json", null function(data) {
//     // $("#artist option").remove(); // Remove all <option> child tags.
//     $.each(data.Users, function(index, item) { // Iterates through a collection
//         $("#artist").append( // Append an object to the inside of the select box
//             $("<option></option>") // Yes you can do this.
//                 .text(item.Description)
//                 .val(item.Id)
//         );
//     });
// });




// $("#artist").click(function() {
//   console.log("inside artist-select click");
//   // console.log($(this).find("option").size);
//     // If the select list is empty:
//     // if ($(this).find("option").size() > 0) {
//         // Documentation on getJSON: http://api.jquery.com/jQuery.getJSON/
//         $.getJSON("https://crackling-torch-4807.firebaseio.com/songs.json", null, function (data) {
//             $.each(data.items, function(i,item){
//                 // Create and append the new options into the select list
//                 $("#artist").append("<option value="+item.id+">"+item.songs+"</option>");
//             });
//         });
//     // }
// });



// $.getJSON( "https://crackling-torch-4807.firebaseio.com/songs.json", function( data ) {
//   var items = [];
//   $.each(data, function(key, val) {
//     items.push( "<select><option id=' + key + '>" + val + "</option>" );
//   });
// 
// 
// 
// 
// 
  return {
    getMeSomeData: function(callbackFunctionReference) {
      // console.log("inside function");
      $.ajax({url: "https://crackling-torch-4807.firebaseio.com/.json"
      }).done(function(firstSongsReturned) {
        callbackFunctionReference(firstSongsReturned);
      })
    }
  }

})




  //   getMeSomeData: function(callbackFunctionReference) {
  //     // console.log("inside function");
  //     $.ajax({url: "javascripts/songArray.json"
  //     }).done(function(firstSongsReturned) {
  //       callbackFunctionReference(firstSongsReturned);
  //     })
  //   }
  // }

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



