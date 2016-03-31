app.controller("songFormCtrl", ["$scope", "$firebaseArray",
function($scope, $firebaseArray) {

    var ref = new Firebase("https://crackling-torch-4807.firebaseio.com/songs");
    $scope.songs = $firebaseArray(ref);  // turn Firebase into Array for Angular
    $scope.newSong = { artist: "", album: "", title: ""};  // create new object to hold user input

    $scope.addSong = function() {
      $scope.songs.$add({  // add user input to Firebase
        artist: $scope.newSong.artist,
        title: $scope.newSong.title,
        album: $scope.newSong.album
      });
      $('#addSongModal').modal('show');
    };
  }
]);
