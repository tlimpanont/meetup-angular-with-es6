import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';

import MainController from './main/main.controller';

import MeetupProfileCardDirective from './directives/meetup-profile-card.directive';
import ProfileService from './services/profile.service';

angular.module('meetupAngularWithEs6', ['ui.router'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .service('profileService', ProfileService)
  .directive('meetupProfileCard', MeetupProfileCardDirective);
