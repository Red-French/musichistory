// the controller is the brain

app.controller("songCtrl", // 'songCtrl' is name given to this file/contoller
  ["$q", "$http", "$scope", "songFactory", // 'songFactory' is name given to 'songStorage.js'
  function($q, $http, $scope, songFactory) {

  $scope.searchText = "";
  $scope.songs = [];  // place 'songs' (new array) on 'scope' object

  songFactory.loadSongs().then(  // execute loadSongs() in 'songFactory' (songStorage.js) - 'then' is a listener
    function() {
      $scope.songs = songFactory.getSongs();  // execute getSongs() in 'songFactory' (songStorage.js)
    },
    function (error) {
      console.log(error);
    }
  );


    $scope.newSong = { artist: "", album: "", name: ""};

    $scope.addSong = function() {
      $scope.songs.$add({
        artist: $scope.newSong.artist,
        name: $scope.newSong.name,
        album: $scope.newSong.album
      });
    };
  }
]);

