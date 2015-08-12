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
    $scope.setInterval=5000;
    
    $scope.slides = [
    {
    	title:'Frozen',
    	image:'../../images/capi.jpeg',
    	text:'Prueba el nuevo cereal'
    },
    {
    	title:'Los Increibles',
    	image:'../../images/capitan.jpg',
    	text:'Prueba el nuevo cereal'
    },
    {
    	title:'The Avengers',
    	image:'../../images/jobs.jpg',
    	text:'Prueba el nuevo cereal'
  }
    ];
  });
