'use strict';

/** ES5 provider.filter
 app.filter('popularity', function() {
  return function(friends_count) {
    var count = parseInt(friends_count);

    switch (count) {
      case 0 :
        return 'Sadly, he has no friends!';
            break;
      case (count > 1 && count < 200 ) :
        return 'Not really impressive, he just an ordinary guy';
            break;
      case (count > 1000000) :
        return 'Wow Dude, your\'re mister popular';
        break;
      default:
            break
    }
  }
});
*/

class PopularityFilter {
  constructor() {

  }
  static check(friends_count) {
    var count = parseInt(friends_count);

    if(count <= 0) {
      return 'Sadly, he has no friends!';
    }
    else if(count >= 1000000) {
      return 'Wow Dude, your\'re mister popular';
    }
    else {
      return 'Not really impressive, he just an ordinary guy';
    }
  }
}

export default () => {
  return (friends_count) => PopularityFilter.check(friends_count)

};
