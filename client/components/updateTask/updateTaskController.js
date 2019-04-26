angular.module('taskManager.updateTask', ['taskManager.services'])

  .controller('updateTaskController', function ($scope, dataManager, $location) {

    getParentTasks();
    $scope.task = dataManager.tasktoUpdate;
    $scope.Start_Date = getDateinFormat($scope.task.Start_Date); //yyyy-mm-dd format
    $scope.End_Date = getDateinFormat($scope.task.End_Date); //yyyy-mm-dd format
    $scope.Cancel = function () {
      $location.path('/')
    }

    $scope.Update = function (task) {
      var request = {
        _id: task._id,
        Task: task.Task,
        Parent_ID: task.Parent,
        Start_Date: typeof (task.Start_Date) == 'string' ? task.Start_Date : getDateFormatted(task.Start_Date),
        End_Date: typeof (task.End_Date) == 'string' ? task.End_Date : getDateFormatted(task.End_Date),
        Priority: task.Priority
      };
      dataManager.updateTask(request).then(function (res) {
        document.getElementById('alert').classList.remove('d-none');
      });
      setTimeout(function () {
        document.getElementById('alert').classList.add('d-none');
      }, 5000);
    }

    //yyyy-mm-dd format
    function getDateinFormat(date) {
      var datesplit = date.split('/')
      var reqDate = datesplit[2] + "-" + datesplit[0] + "-" + datesplit[1];
      return reqDate;
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


    function getDateFormatted(dt) {
      var currentDate = dt;
      var date = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      month = month < 10 ? "0" + month : month;
      var year = currentDate.getFullYear();
      var requestDt = month + "/" + date + "/" + year;
      return requestDt;

    }

  });
