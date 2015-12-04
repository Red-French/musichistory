app.controller("songFormCtrl", ["$scope", "$firebaseArray", 
function($scope, $firebaseArray) {

    var ref = new Firebase("https://crackling-torch-4807.firebaseio.com/songs");
    $scope.songs = $firebaseArray(ref);
    $scope.newSong = {};

    $scope.addSong = function() {
      $scope.songs.$add({
        artist: $scope.newSong.artist,
        name: $scope.newSong.name,
        album: {
          name: $scope.newSong.albumName,
          year: $scope.newSong.albumYear
        }
      });
    };
  }
]);

