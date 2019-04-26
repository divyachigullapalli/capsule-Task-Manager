angular.module('taskManager.viewTask', ['taskManager.services'])

  .controller('viewTasksController', function ($scope, dataManager, $location) {

    getTasksList();
    function getTasksList() {
      dataManager.getTasksList().then(function (res) {
        $scope.tasks = res;
      });
    };

    $scope.filterByDate = function (startEnd, dt) {
      var currentDate = dt;
      if (dt) {
        var date = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        month = month < 10 ? "0" + month : month;
        var year = currentDate.getFullYear();
        var requestDt = month + "/" + date + "/" + year;
        if (startEnd == 'start') {
          $scope.startDate = requestDt;
        } else {
          $scope.endDate = requestDt;
        }
      } else {
        $scope.startDate = undefined;
        $scope.endDate = undefined;
      }

    }

    $scope.greaterThan = function (val) {
      var value = val ? val : 0;
      return function (task) {
        return task['Priority'] > value;
      }
    }

    $scope.lessThan = function (val) {
      var value = val ? val : 30;
      return function (task) {
        return task['Priority'] < value;
      }
    }

    $scope.Edit = function (task) {
      dataManager.tasktoUpdate = task;
      $location.path('/updatetask')
    }

    $scope.EndTask = function (task) {
      var id = task._id;
      $scope.tasks.forEach(function (element, index) {
        if (element._id == id) {
          $scope.tasks[index].endTask = true;
        }
      });
    }

  });
