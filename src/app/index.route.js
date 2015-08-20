function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html'
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
