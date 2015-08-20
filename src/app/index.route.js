function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controllerAs: 'ctrl',
      controller: 'MainController'
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
