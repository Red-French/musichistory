var app = angular.module("MusicApp", ["firebase", "ngRoute"]);  // this is like require
  // global 'angular' object has a function, 'module', that takes a name ('MusicApp') and
  // also takes an array of dependencies.

app.config(['$routeProvider',  // this is like entry.js
 function($routeProvider) {  // 'routeProvider' is the traffic director
   $routeProvider
   // .when('/songs', {
   //      templateUrl: 'index.html',
   //      controller: 'indexCtrl'
   //    })
   .when('/songs/list', {  // when URL ends with this
       templateUrl: 'partials/songList.html',  // location of template
       controller: 'songCtrl'  // name of controller (songCtrl.js)
     })
     .when('/songs/form', {  // when URL ends with this
       templateUrl: 'partials/songForm.html',  //  location of template
       controller: 'songFormCtrl'  //  name of controller (songFormCtrl.js)
     })
      // New route for viewing a single song  
      // Here we set the route with the `:songId` parameter,  
      // which gets matched in the controller to the href we  
      // defined in the songs-list partial: href="#/songs/{{ song.$id }}
      .when('/songs/details/:songId', {
        templateUrl: 'partials/songDetails.html',
        controller: 'SongDetailCtrl'
      })
      .when('/songs/delete', {
        templateUrl: 'partials/songList.html',
        controller: 'songDeleteCtrl'
      })
      .when('/songs/filter', {
        templateUrl: 'partials/songFilter.html',
        controller: 'songFilterCtrl'
      })
     // .otherwise('/songs/list'); // catchall
     .otherwise({ redirectTo: '/songs/list' });
 }]);



