/// <reference path='../../references.ts' />
var app = angular.module('app', ['ngRoute','ngMaterial', 'ngAnimate']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/home/index.html',
        controller: 'app.controllers.home'
    })
}]);
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue', {
		default: '600'
	})
    .accentPalette('light-blue', {
		default: '600'
	});
});
