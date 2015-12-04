app.factory("songFactory", // 'songFactory' is name given to this file/factory
["$q", "$http", 

// PRIVATE

function($q, $http) {

  var song_list;

  function loadSongs () {
    return $q(function(resolve, reject) {  // promises
      $http.get('../../songArray.json')  // $http is the Angular AJAX call
      .success(  // promises uses '.success' for success or failure of the call
        function(objectFromJSONFile) { 
          /* 
          Convert Firebase's object of objects into an array of objects, and store it in the private variable
          */
          // song_list = Object.keys(objectFromJSONFile.songs).map(song => objectFromJSONFile.songs[song]);
          song_list = objectFromJSONFile.songs;  // move array of objects into variable
          // console.log("songFactory>loadSongs()>song_list", objectFromJSONFile.songs);
          resolve(objectFromJSONFile.songs);  // if call is successful
        }, function(error) {  // if call fails
          reject(error);
        }
      );
    });
  }

  var songPromise = loadSongs();  // Store the promise as a private variable

// PUBLIC

  return {
    loadSongs: function() {
      return songPromise;
    },
    getSongs: function() {
      console.log("Factory returning song_list", song_list);
      return song_list;
    },
    getSong: function(name) {
      console.log("Factory returning single song");
      return song_list.filter(function(song){
        return songs.name === name;
      })[0];
    },
    addSongs: function(songs) {
      // song_list = Object.keys(songs).map(s => songs[s]);
      song_list = objectFromJSONFile.songs;  // move array of objects into variable
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
}
]);