  // DELETE INDIVIDUAL SONGS
  // document.querySelector("body").addEventListener("click", function(event) {
  //   // console.log(event);
  //   if (event.target.className === "clear-message") {
  //     // console.log("You clicked on `Delete Message`");
  //     // console.log(event.target.parentElement);
  //     // console.log("events:", event);
  //     // event.target.parentElement.innerHTML = "";
  //     event.target.parentElement.setAttribute("hidden", true);
  //   }
  //   // if (messageBoard.innerHTML.length < 1) {     // WORK ON THIS
  //   //  clearAll.disabled = true;
  //   // }
  //   $("#moreButton").click(function() {
  //     $.ajax({
  //     url: "add-songs.js"
  //   }).done(addSong);
  //   });
  // });

// DELETE SONG ON DELETE-BUTTON CLICK
define(["jquery", "populate-songs", , "add-songs", "refresh"], function($, populate_songs, add_songs, refresh) {

  $(document).on("click", ".delete-button", function() {
    var songKey = $(this).attr("id");

    // DELETE the song from Firebase by specifying the URL to 
    // the exact song you are targeting.
    $.ajax({
      url: "https://crackling-torch-4807.firebaseio.com/songs/"+ songKey +"/.json",
      method: "DELETE"
    })
    .done(function(response) {
      console.log("response from Firebase:", response);

      // You'll likely want to execute the code that you're using
      // on page load here to run the GET XHR and bind to Handlebars

      refresh.getMeSomeData(songs);  // refresh songlist
    });
  });
});


