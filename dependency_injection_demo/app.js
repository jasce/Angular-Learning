// IIFE (Immediately Invoked function Expression)

// Want to make sure no local variables bleed into the global scope

(function(){
	'use strict';// handle mistakes for local variable

	//AngularJs just exposes one global scoped object named, angular
	
	/* here module is a method on angular object
		prototype of module method is:
		module(name_of_module , array_of_dependencies) 
	*/
angular.module('DIApp', [])
	// $scope object for sharing data between view and viewmodel
	.controller('DIController', DIController);

	/* anything with $ sign in front of it is referred to as a Service
			so here scope is a service
			I'm defining a property on scope service
	
		$filter service lets us create filtering functions that are used
		for formatting the data that eventually gets displayed to the user.
	*/
	function DIController($scope , $filter , $injector){

		$scope.name = "Jasmeet";
		$scope.upper = function(){
		var upCase = $filter('uppercase');
		$scope.name = upCase($scope.name);
	};

	/*
		This will produce an array of length 3
	 	["$scope","$filter","$injector"]
	 	This is used by angular under the hood to instantiate services and call
	 	the DIController with instantiated services.
	*/
	console.log($injector.annotate(DIController));

	}	

}) ();
