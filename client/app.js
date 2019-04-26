// create the taskManager app
angular.module("taskManager", [
  "taskManager.services",
  "taskManager.addTask",
  "taskManager.viewTask",
  "taskManager.updateTask",
  "ngRoute",
  "ui.bootstrap"
])

  //config/routing
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "components/addTask/addTask.html",
        controller: 'addTaskController'
      })
      .when('/addtask', {
        templateUrl: "components/addTask/addTask.html",
        controller: 'addTaskController'
      })
      .when('/viewtask', {
        templateUrl: 'components/viewTasks/viewTasks.html',
        controller: 'viewTasksController'
      })
      .when('/updatetask', {
        templateUrl: 'components/updateTask/updateTask.html',
        controller: 'updateTaskController'
      })

    $locationProvider.html5Mode(true);
  })

  // main app controller, not inside a ng-view, hanldes signout
  .controller('AppController', function ($scope, $rootScope) {

  });