var movieApp = angular.module('movieApp', ['ngMaterial']);
movieApp.controller('movieController', function($scope, $http, $mdDialog, $mdMedia){
	

	$scope.searchUsed = false;

	getNowPlaying();

    $scope.userSearch = function(searchTerm) {
		var movieURL = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=' + searchTerm;
   		$scope.imagePath = 'http://image.tmdb.org/t/p/w300/';


		$http({
	    	method: 'GET',
	    	url: movieURL
	    }).then(function successFunction(movieData){
	    	$scope.movieArray = movieData.data.results;
	    }, function failureFunction(movieData){

	    });
    }

   	function getNowPlaying() {
    	var npUrl = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5'; 
    	$scope.imagePath = 'http://image.tmdb.org/t/p/w1280/';
    	
    	$http({
    		method: 'GET',
    		url: npUrl
	   	}).then(function successFunction(npData){
	    	$scope.npArray = npData.data.results;
	    	console.log($scope.npArray);
	    }, function failureFunction(npData){

    	});
    }

    $scope.getMeta = function(movie) {
    	var metaUrl = 

    	$http({
    		method: 'GET',
    		url: metaUrl
	   	}).then(function successFunction(npData){
	    	$scope.npArray = npData.data.results;
	    	console.log($scope.npArray);
	    }, function failureFunction(npData){

    	});
    }

    $scope.moreInfo = function(ev, movie) {
    	var detailsUrl = 'https://api.themoviedb.org/3/movie/' + movie.id + '?api_key=fec8b5ab27b292a68294261bb21b04a5';

    	$http({
    		method: 'GET',
    		url: detailsUrl
	   	}).then(function successFunction(detailsData){
	   		var details = detailsData.data;
	   		console.log(details);

	   		var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;

	   		$mdDialog.show({
	   			parent: angular.element(document.body),
	   			targetEvent: ev,
	   			templateUrl: 'templates/dialog.html',
	   			clickOutsideToClose: true,
	   			fullscreen: useFullScreen
	   		})

   		 	// $mdDialog.show(
	      //       $mdDialog.alert()
	      //       .parent(angular.element(document.querySelector('body')))
	      //       .clickOutsideToClose(true)
	      //       .title(movie.title)
	      //       .textContent(movie.overview)
	      //       .ariaLabel('Movie Info')
	      //       .ok('Close')
	      //       .targetEvent(ev)
       //  	);

	    }, function failureFunction(detailsData){

    	});

   
    }

    function getDetails(movieId){
    	var detailsUrl = 'https://api.themoviedb.org/3/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=' + movieId;

    	$http({
    		method: 'GET',
    		url: detailsUrl
	   	}).then(function successFunction(detailsData){
	    	$scope.npArray = npData.data.results;
	    	console.log($scope.npArray);
	    }, function failureFunction(detailsData){

    	});
    }

})



