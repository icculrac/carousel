'use strict';

describe('Controller: PromocionesCtrl', function () {

  // load the controller's module
  beforeEach(module('carouselApp'));

  var PromocionesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PromocionesCtrl = $controller('PromocionesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PromocionesCtrl.awesomeThings.length).toBe(3);
  });
});
