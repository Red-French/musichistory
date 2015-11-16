define(["jquery", "q"], 
	function($, Q){
// EVENT LISTENER FOR 'ADD SONG TO LIST' BUTTON (DYNAMICALLY CREATED ABOVE)
	// $(".addToSongList").click(function(e) {
return function(){
	var deferred = Q.defer();
	document.querySelector("body").addEventListener("click", function(event) {
		var newSong = {
			"title": $("#newTune").val(),
			"artist": $("#newArtist").val(),
			"album": $("#newAlbum").val()
		}

		if (event.target.className === "addToSongList") {
	    	// console.log(event.target.parentElement);
			console.log("inside addToSongList-click function");
			$.ajax({
				url: "https://crackling-torch-4807.firebaseio.com/songs.json",
				method: "POST",
				data: JSON.stringify(newSong)		
			}).done(function(songs) {  // 'SONGS' NEEDS TO BE THE FIREBASE JSON FILE INFO
			$('#addSongModal').modal('show'); 
				// populate_songs.loadSelectOptions(songs);
				deferred.resolve(songs);
			});
		};


	});
	return deferred.promise;
};
});