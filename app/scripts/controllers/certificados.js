'use strict';

/**
 * @ngdoc function
 * @name carouselApp.controller:CertificadosCtrl
 * @description
 * # CertificadosCtrl
 * Controller of the carouselApp
 */
angular.module('carouselApp')
  .controller('CertificadosCtrl', function ($scope) {
    var pictures = $scope.pictures=[];

    var baseURL="../../images/";

    var keywords=["sqf.png", "haccp.png", "fda.png", "kmd.png"];


$scope.addPics=function(i){
	pictures.push({
		url:baseURL+keywords[i],
	});
};

for (var i=0;i<4;i++){
	$scope.addPics(i);
}

  });
