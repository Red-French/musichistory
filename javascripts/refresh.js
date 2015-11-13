define(["jquery", "populate-songs", "delete-song"], function($, populate_songs, delete_song) {

console.log("inside refresh");
	return {
		getMeSomeData: function(songs) {
	      $.ajax({url: "https://crackling-torch-4807.firebaseio.com/.json"
	      }).done(function(songs) {
			    require(["hbs!../templates/songs"], function(songTemplate) {
			    	$("#results").html(songTemplate(songs));
				})
				
		        require(["hbs!../templates/artist"], function(dropdownTemplate) {
		          $("#artist").append(dropdownTemplate(songs));
	      	})
	      })
		}
	};
});
