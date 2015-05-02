angular
    .module('tellMe', [
        'ngAnimate',
        'ui.router',
        'templates'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

      /**
     * Routes and States
     */
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/assets/home.html',
            controller: 'HomeCtrl'
        })
        .state('dashboard', {
            abstract: true,
            url: '/dashboard',
            templateUrl: '/assets/dashboard/layout.html'
        })

        // the default route when someone hits dashboard
        .state('dashboard.one', {
            url: '',
            templateUrl: '/assets/dashboard/one.html'
        })
        // this is /dashboard/two
        .state('dashboard.two', {
            url: '/two',
            templateUrl: '/assets/dashboard/two.html'
        })
        // this is /dashboard/three
        .state('dashboard.three', {
            url: '/three',
            templateUrl: '/assets/dashboard/three.html'
        });

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);

    });
