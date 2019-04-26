angular.module("taskManager.services", [])

.factory("dataManager", function ($http) {

    // add Task
    var addTask = function (task) {
      return $http({
        method: "POST",
        url: "/api/addtask",
        data: JSON.stringify(task)
      })
        .then(function (res) {
          return res.data
        })
    }

    var getTasksList = function () {
      return $http({
        method: "GET",
        url: "/api/tasks"
      })
        .then(function (res) {
          return res.data
        })
    }

    var updateTask = function (task) {
      return $http({
        method: "PUT",
        url: "/api/updatetask",
        data: JSON.stringify(task)
      })
        .then(function (res) {
          return res.data
        })
    }


    return {
        addTask: addTask,
        getTasksList: getTasksList,
        updateTask: updateTask
    }

  })