function config ($logProvider, meetupProfileCardProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  meetupProfileCardProvider.setBackgroundColor('#eee');
}

export default config;
