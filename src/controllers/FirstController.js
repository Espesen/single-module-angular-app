angular.module()
  .controller(
    'FirstController',
    [
      '$scope',
      function($scope) {

        // Controller code
        $scope.greeting = 'Hello, world!';

      }]);