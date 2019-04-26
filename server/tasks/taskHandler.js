// require  helper, Task
var helper = require('../config/helper.js');
var Task = require('./taskModel.js');

// export function
module.exports = {

  addTask: function (req, res) {
    var task = req.body.Task;
    var newTaskObj = req.body
    Task.findOne({ 'Task': task }, function (err, task) {
      if (err) { // notifies if error is thrown
        helper.sendError(err, req, res);
      } else {
        if (task) { // notifies if email is already taken
          helper.sendError("task already taken", req, res);
        } else {
          Task.create(newTaskObj, function (err, task) {
            if (err) { // notifies if error is thrown
              helper.sendError(err, req, res);
            } else { // signup success, assigns jwt session token
              res.json({
                'taskid': task['id']
                // anything else to send back on success?
              });
            }
          });
        }
      }
    });
  },

  getTasksList: function (req, res) {
    Task.find({})
      .then(function (tasks) {
        res.json(tasks);
      });
  },

  updateTask: function (req, res) {
    var id = req.body._id;
    var newvalues = { $set: { Task: req.body.Task, Parent_ID: req.body.Parent_ID, Start_Date: req.body.Start_Date, End_Date: req.body.End_Date, Priority: req.body.Priority } };
    Task.update({ _id: id }, newvalues, function (err, results) {
      if (err) { helper.sendError(err, req, res) } else {
        res.json(results)
      }
    });

  }

};