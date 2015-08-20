'use strict';

/** ES5 provider.provider
 app.provider('meetupProfileCard', function() {

  var backgroundColor = 'white';

  return {
    setBackgroundColor: function(color) {
      backgroundColor = color;
    },
    $get: function() {
      return  {
        backgroundColor: backgroundColor
      }
    }
  }
});
 */

class MeetupProfileCardProvider {
  constructor() {

    this.backgroundColor = 'white';

    this.$get = this.$get.bind(this);
  }
  setBackgroundColor(color) {
    this.backgroundColor = color;
  }
  //here deps injection
  $get() {
    return {
      backgroundColor: this.backgroundColor
    }
  }
}

export default MeetupProfileCardProvider;



