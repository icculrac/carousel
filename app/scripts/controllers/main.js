'use strict';

/**
 * @ngdoc function
 * @name carouselApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carouselApp
 */
angular.module('carouselApp')
  .controller('MainCtrl', function ($scope) {
  	var url='../../images/';
    $scope.setInterval=5000;
    
    $scope.slides = [
	    {
	    	title:'Frozen',
	    	image:url+'capi.jpeg',
	    	text:'Prueba el nuevo cereal'
	    },
	    {
	    	title:'Los Increibles',
	    	image:url+'capitan.jpg',
	    	text:'Prueba el nuevo cereal'
	    },
	    {
	    	title:'The Avengers',
	    	image:url+'jobs.jpg',
	    	text:'Prueba el nuevo cereal'
	  	}
    ];

    $scope.footer=[
	    {
	    	title:'Nosotros',
	    	text:'xoxoxoxoxox',
	    	text2:'xoxoxoxoxox',
	    	text3:'xoxoxoxoxox',
	    	text4:'xoxoxoxoxox',
	    	text5:'xoxoxoxoxox',
	    	text6:'xoxoxoxoxox',
	    	text7:'xoxoxoxoxox'
	    },
	    {
	    	title:'Productos',
	    	text:'xoxoxoxoxox',
	    	text2:'xoxoxoxoxox',
	    	text3:'xoxoxoxoxox',
	    	text4:'xoxoxoxoxox',
	    	text5:'xoxoxoxoxox',
	    	text6:'xoxoxoxoxox',
	    	text7:'xoxoxoxoxox'
	    },
	    {
	    	text:'xoxoxoxoxox',
	    	text2:'xoxoxoxoxox',
	    	text3:'xoxoxoxoxox',
	    	text4:'xoxoxoxoxox',
	    	text5:'xoxoxoxoxox',
	    	text6:'xoxoxoxoxox',
	    	text7:'xoxoxoxoxox'
	    },
	    {
	    	title:'Certificados',
	    	text:'xoxoxoxoxox',
	    	text2:'xoxoxoxoxox',
	    	text3:'xoxoxoxoxox',
	    	text4:'xoxoxoxoxox'
	    },
	    {
	    	title:'Promociones',
	    	text:'xoxoxoxoxox'
	    },
	    {
	    	title:'Contactos',
	    	text:'xoxoxoxoxox',
	    	text2:'xoxoxoxoxox',
	    	text3:'xoxoxoxoxox',
	    	text4:'xoxoxoxoxox',
	    	text5:'xoxoxoxoxox',
	    	text6:'xoxoxoxoxox',
	    	text7:'xoxoxoxoxox'
	    }
    ];
  });
