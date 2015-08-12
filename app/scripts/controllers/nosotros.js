'use strict';

/**
 * @ngdoc function
 * @name carouselApp.controller:NosotrosCtrl
 * @description
 * # NosotrosCtrl
 * Controller of the carouselApp
 */
angular.module('carouselApp')
  .controller('NosotrosCtrl', function ($scope) {
    $scope.sidems = [
	    {
	    	title:'Nosotros',
	    	text:'xoxoxoxoxox',
	    	text2:'xoxoxoxoxo',
	    	text3:'xoxoxoxoxox',
	    	text4:'xoxoxoxoxo',
	    	text5:'xoxoxoxoxo',
	    	text6:'xoxoxoxoxo'
	    }
   	];

   	$scope.posts = [
   		{
	   		title:'Nosotros',
	   		summary:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}
   	];
  });
