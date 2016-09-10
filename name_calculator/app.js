// IIFE (Immediately Invoked function Expression)

// Want to make sure no local variables bleed into the global scope

(function(){
	'use strict';// handle mistakes for local variable

	//AngularJs just exposes one global scoped object named, angular
	
	/* here module is a method on angular object
		prototype of module method is:
		module(name_of_module , array_of_dependencies) 
	*/
angular.module('NameCalculator', [])
	// $scope object for sharing data between view and viewmodel
	.controller('NameCalculatorController', function($scope){
		$scope.name = "";
		$scope.totalValue = 0;
		$scope.displayNumeric = function(){
			var totalNameValue = calculateNumericForString($scope.name) //get the total Value
			$scope.totalValue = totalNameValue;
		};	
		
		function calculateNumericForString(string){
			var totalStringValue = 0;
			for(var i=0;i<string.length;i++){
				totalStringValue += string.charCodeAt(i);
			}
			return totalStringValue;
		};

	});

}) ();
