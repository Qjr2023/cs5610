const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../db.js');

router.post('/', async(req, res) => {
    try {
        console.log("req.body", req.body);
        await db.addToDB(req.body);
        res.redirect('/tasks');
        // res.send("Task added");
    } catch (err) {
        console.log(err.status);
    }
}
)

router.get('/newtask', (req, res) => {
    res.render('taskForm');
}
)

router.get('/', async(req, res) => {
    try {
        // Use our new getAllTasks function instead of the fake API
        const tasks = await db.getAllTasks();
        // Render tasks view with our database tasks
        res.render('task', { tasks });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving tasks");
    }
});

router.get('/:taskId', async(req, res) => {
    try {
        const taskResponse = await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`);
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${taskResponse.data.userId}`);
        // res.json(taskResponse.data);
        res.render('task', {
            id: req.params.taskId, 
            title:taskResponse.data.title, 
            completed: taskResponse.data.completed,
            name: userResponse.data.name
        });
    } catch (err) {
        console.log(err.status);
    }

    // console.log(req.params.taskId);
    // res.send(`<p>You are reviewing task ${req.params.taskId}</p>`)
});

module.exports = router;
