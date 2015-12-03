// rename songCtrl.js
var app = angular.module("loadSongsApp", ["ngRoute"]);

app.controller("songLoadCtrl", ["$q", "$http", "$scope", "simple-songs", 
function($q, $http, $scope, simpleSongs) {

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongCtrl'
      }).
      when('/songs/add', {
	    templateUrl: 'partials/song-form.html',
	    controller: 'SongCtrl'
      });
  }]);

	$scope.searchText = "";
	$scope.songs = [];
	// [    
	// 	{
	// 	"title": "The Walk",
	// 	"artist": "Mayer Hawthorne",
	// 	"album": "How Do You Do"
	// 	},
	// 	{
	// 	"title": "Medicine",
	// 	"artist": "Grace Potter",
	// 	"album": "Grace Potter and the Nocturnals"      
	// 	},
	// 	{
	// 	"title": "Legs",
	// 	"artist": "ZZ Top",
	// 	"album": "Eliminator"      
	// 	}
	// ];

	$scope.newSong = {};

	$scope.addSong function () {
			$scope.songs.push($scope.newSong);
	}

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

  getSongs.then(function (songs) {
	  $scope.songs = Object.keys(songs).map(s => songs[s]);
    console.log("songArray",songArray);
  }, function (error) {
    console.log("Failed");
  });


}]);
