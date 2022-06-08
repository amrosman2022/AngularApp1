angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('ministryOfAwqaf', {
    url: '/page5',
    templateUrl: 'templates/ministryOfAwqaf.html',
    controller: 'ministryOfAwqafCtrl'
  })

  .state('settings', {
    url: '/page6',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('location', {
    url: '/page9',
    templateUrl: 'templates/location.html',
    controller: 'locationCtrl'
  })

  .state('beaconAdmin', {
    url: '/page12',
    templateUrl: 'templates/beaconAdmin.html',
    controller: 'beaconAdminCtrl'
  })

  .state('news', {
    url: '/page11',
    templateUrl: 'templates/news.html',
    controller: 'newsCtrl'
  })

  .state('prayerTimes', {
    url: '/page13',
    templateUrl: 'templates/prayerTimes.html',
    controller: 'prayerTimesCtrl'
  })

  .state('newsDetails', {
    url: '/page14',
    templateUrl: 'templates/newsDetails.html',
    controller: 'newsDetailsCtrl'
  })

  .state('nearByMosques', {
    url: '/page10',
    templateUrl: 'templates/nearByMosques.html',
    controller: 'nearByMosquesCtrl'
  })

$urlRouterProvider.otherwise('/page5')


});