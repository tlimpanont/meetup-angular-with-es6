'use strict';


/** ES5 controller syntax
 function MainController($http) {

  this.goGetSome = function() {
    $http.get('/someurl');
  };
}
 app.controller('MainController', MainController);
 */

class MainController {
  constructor(profiles) {
    this.profiles = profiles;
    this.meetupProfile = profiles[0];
  }
}

export default MainController;
