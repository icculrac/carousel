'use strict';

/**
 * @ngdoc function
 * @name carouselApp.controller:ProductosCtrl
 * @description
 * # ProductosCtrl
 * Controller of the carouselApp
 */
angular.module('carouselApp')
  .controller('ProductosCtrl', function ($scope) {
  	var baseURL="../../images/";
  	$scope.setInterval=5000;
    
    $scope.sidems = [
	    {
	    	title:'Productos',
	    	text:'xoxoxoxoxox',
	    	text2:'xoxoxoxoxo',
	    	text3:'xoxoxoxoxox',
	    	text4:'xoxoxoxoxo',
	    	title2:'xoxoxoxoxox',
	    	text5:'xoxoxoxoxo',
	    	text6:'xoxoxoxoxo',
	    	text7:'xoxoxoxoxo',
	    	text8:'xoxoxoxoxo',
	    	title3:'xoxoxoxoxox',
	    	text9:'xoxoxoxoxo',
	    	text10:'xoxoxoxoxo',
	    	text11:'xoxoxoxoxo',
	    	text12:'xoxoxoxoxo',
	    }
   	];

    $scope.slides = [
	    {
	    	image:baseURL+'CaptainAmerica.png'
	    },
	    {
	    	image:baseURL+'IronMan.jpg'
	    },
	    {
	    	image:baseURL+'Frozen.png'
	  	}
    ];
  });
