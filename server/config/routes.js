// require taskHandler
var taskHandler = require('../tasks/taskHandler.js');

// export function
module.exports = function (app, express) {

    // GET- All Tasks
    app.get('/api/tasks', taskHandler.getTasksList);

    // PUT - for updating Task
    app.put('/api/updatetask', taskHandler.updateTask);

    // POST - addTask
    app.post('/api/addtask', taskHandler.addTask);

    app.get('/test', function (req, res) {
        res.json('hey hey hey I’m aliiiive!');
    });

};