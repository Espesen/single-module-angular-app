angular.module('app', [])

  .config([function() {
    // app config
  }])

  .run([function() {
    // run block
  }])

  .controller(
    'FirstController',
    [
      '$scope',
      function($scope) {

        // Controller code
        $scope.greeting = 'Hello, world!';

      }])

  .controller(
    'SecondController',
    [
      '$scope',
      function($scope) {

        // Controller code

      }])

  .directive(
    'FirstDirective',
    [
      function() {

        // directive code

      }])

  .directive(
    'SecondDirective',
    [
      function() {

        // directive code

      }])

  .filter(
    'FirstFilter',
    [
      function() {

        // filter code

      }])

  .filter(
    'SecondFilter',
    [
      function() {

        // filter code

      }])

  .factory(
    'FirstService',
    [
      function() {

        // service code

      }])

  .factory(
    'SecondService',
    [
      function() {

        // service code

      }]);