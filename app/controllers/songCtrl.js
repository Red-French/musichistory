// the controller is the brain

app.controller("songCtrl", // 'songCtrl' is name given to this file/contoller
  ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {

  $scope.searchText = "";
  $scope.songs = [];  // place 'songs' (new array) on 'scope' object


// Just like in the RequireJS version of Music History, make a reference
    var ref = new Firebase("https://crackling-torch-4807.firebaseio.com/songs");

  // Instead of snapshot.val(), use this syntax to get songs
    $scope.songs = $firebaseArray(ref);


  // songFactory.loadSongs().then(  // execute loadSongs() in 'songFactory' (songStorage.js) - 'then' is a listener
  //   function() {
  //     $scope.songs = songFactory.getSongs();  // execute getSongs() in 'songFactory' (songStorage.js)
  //   },
  //   function (error) {
  //     console.log(error);
  //   }
  // );


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

