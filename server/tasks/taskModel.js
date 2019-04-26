var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  Task_ID: Number,
  Parent_ID: String,
  Parent_Task: String,
  Task: String,
  Start_Date: String,
  End_Date: String,
  Priority: Number
});

module.exports = mongoose.model('Task', TaskSchema);