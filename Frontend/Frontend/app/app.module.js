var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {            
            templateUrl: '../home/home.html',
            controller: 'homeController'
        })        
        .when('/workout', {
            templateUrl: '../workout/workout.html',
            controller: 'workoutController'
        })
});

