angular.module('taskManager.addTask', ['taskManager.services'])

  .controller('addTaskController', function ($scope, dataManager, $location) {

    getParentTasks(); // getting all tasks for the parents TASk
    $scope.add = function () {
      var startDate = getDateFormat($scope.task.startDate);
      var endDate = getDateFormat($scope.task.endDate);
      var getParent = $scope.getParentByFilter($scope.task.Parent);
      var request = {
        'Parent_ID': $scope.task.Parent,
        'Parent_Task': getParent[0].Parent_Task,
        'Task': $scope.task.Name,
        'Start_Date': startDate,
        'End_Date': endDate,
        'Priority': $scope.task.Priority,
      };
      dataManager.addTask(request).then(function (res) {
        document.getElementById('alert').classList.remove('d-none');
      });
      setTimeout(function () {
        document.getElementById('alert').classList.add('d-none');
      }, 5000);
      $scope.reset();
      getParentTasks();
    }

    $scope.reset = function () {
      $scope.task = {}
    }

    function getDateFormat(dt) {
      var currentDate = dt;
      var date = currentDate.getDate();
      month = date < 10 ? "0" + date : date;
      var month = currentDate.getMonth() + 1;
      month = month < 10 ? "0" + month : month;
      var year = currentDate.getFullYear();
      var requestDt = month + "/" + date + "/" + year;
      return requestDt;
    }

    function getParentTasks() {
      dataManager.getTasksList().then(function (res) {
        var parentTasks = [];
        res.forEach(function (element, index) {
          parentTasks[index] = {
            'Parent_ID': element._id,
            'Parent_Task': element.Task
          }
        });
        $scope.parentTasks = parentTasks;
        return $scope.parentTasks;
      });
    }

    $scope.getParentByFilter = function (id) {
      var parent = ($scope.parentTasks).filter(x => x.Parent_ID === id)
      return parent;
    }

  });
