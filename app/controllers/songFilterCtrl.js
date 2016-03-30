app.controller("songFilterCtrl",
  ["$scope", "$routeParams", "$firebaseArray",
  function($scope, $routeParams, $firebaseArray) {
    $scope.selectedSong = {};
    // $routeParams allows you to grab the value of the current route parameters.
    // So, here we can pluck out the id of the particular song,
    // because we set it in the href of the link from song-list partial.
    $scope.songId = $routeParams.songId;

    var ref = new Firebase("https://crackling-torch-4807.firebaseio.com/songs");
    $scope.songs = $firebaseArray(ref);

  // Make sure you use the $loaded promise handler, which waits
  // for all songs to be loaded from the reference before you try
  // to grab the record the user wanted.
    // $scope.songs.$loaded()
    //   .then(function() {
    //     console.log("scope.songs", $scope.songs)
    //   // The $getRecord method on a $firebaseArray is very useful
    //     $scope.selectedSong = $scope.songs.$getRecord($scope.songId);
    //     console.log("$scope.selectedSong", $scope.selectedSong);
    //   })
    //   .catch(function(error) {
    //     console.log("Error:", error);
    //   });

          // $scope.filterSong = function(song) {
          // function filterSong() {
    // $scope.filterSong = function(song) {
    //   console.log("inside filterSong");
    //   console.log(song);
    // };

 }]
);
