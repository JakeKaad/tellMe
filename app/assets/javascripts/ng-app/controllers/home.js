angular.module('tellMe')
  .controller('HomeCtrl', function ($scope, RailsFactory) {

    $scope.RailsFactory = RailsFactory;
    

    $scope.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];
  });
