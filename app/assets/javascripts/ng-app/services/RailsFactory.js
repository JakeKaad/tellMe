angular.module('tellMe')
  .factory('RailsFactory', function($http) {

    var factory = {};

    factory.getUsers = function() {
      console.log("Clicked");
      $http.get('/users').success(function() {
        alert("Getting a user.");
      }).error(function() {
        alert("Failed.");
      });
    };

    return factory;
  });
