// IIFE (Immediately Invoked function Expression)

// Want to make sure no local variables bleed into the global scope

(function(){
	'use strict';// handle mistakes for local variable

	//AngularJs just exposes one global scoped object named, angular
	
	/* here module is a method on angular object
		prototype of module method is:
		module(name_of_module , array_of_dependencies) 
	*/
angular.module('myFirstApp', [])
	// $scope object for sharing data between view and viewmodel
	.controller('MyFirstController', function($scope){
		$scope.name = "Jasmeet Singh!!";
		$scope.sayHello = function(){
			return "Hello Jasmeet";
		};
	});

}) ();
