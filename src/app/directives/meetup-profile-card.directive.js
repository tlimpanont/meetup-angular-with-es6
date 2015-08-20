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
  constructor($timeout) {

    this.scope = {
      profile: '=',
      imageLoaded: '@'
    };

    this.link = this.link.bind(this);

    this.$timeout = $timeout;

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
            <i class="user icon"></i> {{ profile.friends_count | popularity }}
          </a>
      </div>
    </div>
    `;
  }
  link(scope, element, attrs) {

    let $card = jQuery(element).find('.ui.card');
    let $image = jQuery(element).find('.image img');

    $image.load(() => {
      this.$timeout( () => {
        this.setPosition($card);
      }, 100);
    });

  }
  setPosition($element) {
    $element.position({
      at: 'center center',
      my: 'center center',
      of: jQuery(window)
    })
  }
}

export default ($timeout) => {
  return new MeetupProfileCardDirective($timeout);
};
