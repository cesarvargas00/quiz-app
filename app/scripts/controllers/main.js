'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizApp
 */

angular.module('quizApp')
    .controller('MainCtrl', function($scope) {
        $scope.quiz = [{
            "q": "Who is the best ping pong player at FSA?",
            'options': ["Mike Y", "Eddie", "Nimit", "Patrick","Oz"],
            'answer': "Oz",
            difficulty:10
        }, {
            "q": "Which robot name was chanted during Lego Mindstorms?",
            'options': ['infiniteLoop', 'noHope.js', 'johnny5', 'none of the above'],
            'answer': 'noHope.js',
            difficulty:27
        }, {
            'q': "Out of the following frontend frameworks, which framework is most rails-like",
            'options': ['Ember.js', 'Angular.js', 'Backbone.js', 'Meteor.js'],
            'answer': 'Ember.js',
            difficulty:5
        }, {
            'q': "Which project used a local data store?",
            'options': ['TripPlanner', 'Twitter.js', 'WikiWalker', 'WikiStack'],
            'answer': 'Twitter.js',
            difficulty:9
        }];
        $scope.score = 0;
        $scope.checkAnswer = function(question) {
          if(question.choice === question.answer){
            console.log("Yes man, you got it!");
          } else console.log("bummer...");
        };
    });
