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
      url: "add-songs.js"
    }).done(addSong);
    });
  });