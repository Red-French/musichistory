app.factory("songFactory", function() {

  // var song_list = [
  //   { id: 1, name: "99 Problems", album: "Black", artist: "JayZ" },
  //   { id: 2, name: "Helter Skelter", album: "White", artist: "Beatles"  },
  //   { id: 3, name: "99 Problems", album: "Grey", artist: "DJ Danger Mouse"  }
  // ];

  var loadSongs = $q(function(resolve, reject) {
      $http.get('../songArray.json')
      .success(
        function(objectFromJSONFile) {
          // song_list = Object.keys 
          resolve(objectFromJSONFile.songs);
        }, function(error) {
          reject(error);
        }
      );
    });

var songPromise = loadSongs();

  return {
    loadSongs: function() {
      return songPromise;
    }
    getSongs: function() {
      console.log("Factory returning all songs");
      return song_list;
    },
    getSong: function(id) {
      console.log("Factory returning single song");
      return song_list.filter(function(song){
        return song.id === id;
      })[0];
    },
    addSongs: function(songs) {
      song_list = Object.keys(songs).map(s => songs[s]);
      console.log("Song list added to factory");
      // song_list = songs;
      return song_list;
    },
    addSong: function(song) {
      console.log("Add single song to factory");
      song_list.push(song);
      return song_list;
    }
  }
});