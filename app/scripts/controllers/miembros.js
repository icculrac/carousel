'use strict';

/**
 * @ngdoc function
 * @name carouselApp.controller:MiembrosCtrl
 * @description
 * # MiembrosCtrl
 * Controller of the carouselApp
 */
angular.module('carouselApp')
  .controller('MiembrosCtrl', function ($scope, $http) {
    $http.get('http://localhost:9000/miembros.json').success(function(data){
    $scope.miembros =data;
    });
    $scope.gridOptions = {
    	data: 'miembros'
    };
  });
