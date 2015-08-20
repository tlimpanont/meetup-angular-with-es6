'use strict';

/**
 * ES5 Directive
 app.directive('meetupProfileCard', function() {
  return {
    template: 'some html template',
    scope: {
      profile: '='
    }
    link: function(scope, element, attrs) {

    }
  }
});
 */

class MeetupProfileCardDirective {
  constructor() {

    this.scope = {
      profile: '='
    };

    this.template = `
      <div class="ui card">
      <div class="image">
        <img ng-src="{{profile.image}}" />
      </div>
      <div class="content">
        <a class="header">{{profile.name}}</a>
        <div class="meta">
          <span class="date">{{profile.role}}</span>
        </div>
        <div class="description">
        {{profile.description}}
      </div>
      </div>
      <div class="extra content">
          <a>
            <i class="user icon"></i> Sadly, no friends
          </a>
      </div>
    </div>
    `;
  }
  link(scope, element, attrs) {

  }
}

export default () => {
  return new MeetupProfileCardDirective();
};
