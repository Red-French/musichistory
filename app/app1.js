var app = angular.module("MusicApp", []);

app.controller("songLoadCtrl", ["$q", "$http", "$scope", 
function($q, $http, $scope) {

  var getSongs = $q(function(resolve, reject) {
      $http.get('../songArray.json')
      .success(
        function(objectFromJSONFile) {
          resolve(objectFromJSONFile.songs);
        }, function(error) {
          reject(error);
        }
      );
    });

    // var getMoreSongs = $q(function(resolve, reject) {
    //   $http.get('../songList2.json')
    //   .success(
    //     function(objectFromJSONFile) {
    //       resolve(objectFromJSONFile.songs);
    //     }, function(error) {
    //       reject(error);
    //     }
    //   );
    // });
// .concat to joint 2 arrays

  getSongs.then(function (songs) {
	  $scope.songs = Object.keys(songs).map(s => songs[s]);
	  // $scope.songz = Object.keys(songz).map(s => songs[s]);
    console.log("songs",songs);
  }, function (error) {
    console.log("Failed");
  });
}]);
