(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('meetupAngularWithEs6'));

    it('MainController should be defined', inject(function($controller) {
      var vm = $controller('MainController');
      expect(vm).toBeDefined();
    }));
  });
})();
