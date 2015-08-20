'use strict';

/**
 * @ngdoc overview
 * @name carouselApp
 * @description
 * # carouselApp
 *
 * Main module of the application.
 */
angular
  .module('carouselApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.grid'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/nosotros', {
        templateUrl: 'views/nosotros.html',
        controller: 'NosotrosCtrl',
        controllerAs: 'nosotros'
      })
      .when('/certificados', {
        templateUrl: 'views/certificados.html',
        controller: 'CertificadosCtrl',
        controllerAs: 'certificados'
      })
      .when('/productos', {
        templateUrl: 'views/productos.html',
        controller: 'ProductosCtrl',
        controllerAs: 'productos'
      })
      .when('/promociones', {
        templateUrl: 'views/promociones.html',
        controller: 'PromocionesCtrl',
        controllerAs: 'promociones'
      })
      .when('/contactanos', {
        templateUrl: 'views/contactanos.html',
        controller: 'ContactanosCtrl',
        controllerAs: 'contactanos'
      })
      .when('/miembros', {
        templateUrl: 'views/miembros.html',
        controller: 'MiembrosCtrl',
        controllerAs: 'miembros'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
