"use strict";

angular.module("iApp", ["ionic"])

.controller("tCtrl", function($scope, $ionicModal) {

  $scope.tasks = [];

  $ionicModal.fromTemplateUrl("newTask.html", function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: "slide-in-up"
  });

  $scope.addTask = function(task) {
    $scope.tasks.push({
      title: task.title
    });
    $scope.taskModal.hide();
    task.title = "";
  };

  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  $scope.cancelNew = function() {
    $scope.taskModal.hide();
  };

});
