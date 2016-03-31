app.controller("songDeleteCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {

	$scope.searchTest = "";
	$scope.songs = [];

	var ref = new Firebase("https://crackling-torch-4807.firebaseio.com/songs");
	$scope.songs = $firebaseArray(ref);

	$scope.deleteSong = function(song) {
		$scope.songs.$remove(song);
	};

}]);
