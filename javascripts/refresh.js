define(["jquery", "populate-songs", "delete-song"], function($, populate_songs, delete_song) {

console.log("inside refresh");
	return {
		getMeSomeData: function(songs) {
	      $.ajax({url: "https://crackling-torch-4807.firebaseio.com/.json"
	      }).done(function(songs) {
			    require(["hbs!../templates/songs"], function(songTemplate) {
			    	$("#results").html(songTemplate(songs));
				});
				// load artist dropdown
		        require(["hbs!../templates/artist"], function(dropdownTemplate) {
			        $("#artist").html(dropdownTemplate(""));
			        $("#artist").append(dropdownTemplate(songs));

		        // load album dropdown
				require(["hbs!../templates/album"], function(dropdownTemplate) {
					 $("#album").html(dropdownTemplate(""));
					 $("#album").append(dropdownTemplate(songs));
				});
				// load song dropdown
				require(["hbs!../templates/title"], function(dropdownTemplate) {
					$("#songTitle").html(dropdownTemplate(""));
					$("#songTitle").append(dropdownTemplate(songs));
      });
	      	});
	      });
		}
	};
});
