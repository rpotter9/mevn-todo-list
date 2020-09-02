const router = require('express').Router();
const tasksController = require('../controllers/tasks.controller')


router
    .get('/', tasksController.getAllTasks)
    .put('/:id', tasksController.updateTask)
    .post('/', tasksController.addTask)
    .delete('/:id', tasksController.deleteTask)
    

module.exports = {
    router: router,
    base: '/tasks'
};   
