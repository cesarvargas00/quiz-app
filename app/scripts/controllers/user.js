'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('UserCtrl', function ($scope, $timeout) {
    $scope.timer = {
      t:10,
      enable:false
    };
    $scope.countdown = function(question){
      $scope.timer.enable = true;
      console.log($scope.timer.t);
      if($scope.timer.t > 0){
        $scope.timer.t--;
        $timeout($scope.countdown,1000);
      } else {
        $scope.timer.enable = false;
        $scope.timer.t = 10;
      }
      };
    });
