var app = angular.module("MusicApp", ["ngRoute"]);

app.config(['$routeProvider',
 function($routeProvider) {
   $routeProvider
   .when('/songs/list', {
       templateUrl: 'partials/songList.html',
       controller: 'MusicCtrl'
     })
     .when('/songs/form', {
       templateUrl: 'partials/songForm.html',
       controller: 'MusicCtrl'
     })
     .otherwise('/songs/list');
 }]);