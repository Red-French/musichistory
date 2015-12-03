app.controller("SongCtrl", 
  ["$q", "$http", "$scope", "songFactory", 
  function($q, $http, $scope, songFactory) {

  $scope.searchText = "";
  $scope.songs = [];

  songFactory.loadSongs().then {
    function() {
      scope.songs = songFactory.getSongs();
    },
    function (error) {
      console.log(error);
    }
  };


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

