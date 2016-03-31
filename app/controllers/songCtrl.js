// the controller is the brain

app.controller("songCtrl", // 'songCtrl' is name given to this file/contoller
  ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {

  $scope.searchText = "";

// Just like in the RequireJS version of Music History, make a reference
    var ref = new Firebase("https://crackling-torch-4807.firebaseio.com/songs");

  // Instead of snapshot.val(), use this syntax to get songs
    $scope.songs = $firebaseArray(ref);
  }
]);
