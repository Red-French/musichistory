var app = angular.module("MusicApp", ["ngRoute"]);  // this is like require
  // global 'angular' object has a function, 'module', that takes a name ('MusicApp') and
  // also takes an array of dependencies.

app.config(['$routeProvider',  // this is like entry.js
 function($routeProvider) {  // 'routeProvider' is the traffic director
   $routeProvider
   .when('/songs/list', {  // when URL ends with this
       templateUrl: '../partials/songList.html',  // location of template
       controller: 'songCtrl'  // name of controller (songCtrl.js)
     })
     .when('/songs/form', {  // when URL ends with this
       templateUrl: '../partials/songForm.html',  //  location of template
       controller: 'songFormCtrl'  //  name of controller (songFormCtrl.js)
     })
    // .when('/songs/form', {  // when URL ends with this
    //    templateUrl: '../partials/songFilters.html',  //  location of template
    //    controller: 'songFormCtrl'  //  name of controller (songFormCtrl.js)
    //  })
     .otherwise('/songs/list'); // catchall
 }]);