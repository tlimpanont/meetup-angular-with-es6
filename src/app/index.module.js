import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';

angular.module('meetupAngularWithEs6', ['ui.router'])
  .config(config)
  .config(routerConfig)
  .run(runBlock);
