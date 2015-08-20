'use strict';

/**
 ES5 Angular provider.service

 app.service('serviceName', function($q) {

  var profiles = [{
    title: 'Theuy Limpanont',
    role: 'MeetUp Speaker',
    description: 'lreom ',
    friends_count: 0
  }];

  return {
    getAll: function() {
      return  $q.resolve(profiles);
    }
  }
});
 */

class ProfileService {
  constructor($q) {
    this.profiles = [{
      title: 'Theuy Limpanont',
      image: 'http://photos4.meetupstatic.com/photos/event/5/6/1/a/600_441022042.jpeg',
      role: 'MeetUp Speaker',
      description: `
        (Freelance Frontend Engineer) is our second speaker.
        His topic is “Bootstrap your angularJS with ES6”.
        He will also show us how to use Yo generator.
      `,
      friends_count: 100000000
    }];

    this.$q = $q;
  }
  getAll() {
    return this.$q.resolve(this.profiles);
  }
}
export default ProfileService;
