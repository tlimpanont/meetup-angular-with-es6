function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controllerAs: 'ctrl',
      controller: 'MainController',
      resolve: {
        profiles: (profileService) => {
          return profileService.getAll();
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
