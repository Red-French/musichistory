define(["jquery"], 
	function($){
return function(){
		var newSong = {
			"title": $("#newTune").val(),
			"artist": $("#newArtist").val(),
			"album": $("#newAlbum").val()
		};
			$.ajax({
				url: "https://crackling-torch-4807.firebaseio.com/songs.json",
				method: "POST",
				data: JSON.stringify(newSong)		
			}).done(function(songs) {
			// $('#addSongModal').modal('show'); 
			});
	};
});