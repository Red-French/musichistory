var app = angular.module("loadSongsApp", ["ngRoute"]);

app.controller("songLoadCtrl", ["$q", "$http", "$scope" "simple-songs", 
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
	    controller: 'SongFormCtrl'
      })
      .otherwise('songs/list');  // catchall
  }]);