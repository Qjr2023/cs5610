const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../db.js');

router.post('/', async(req, res) => {
    try {
        console.log("req.body", req.body);
    // db.addToDB(req.body);
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
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
        res.json(response.data);
    } catch (err) {
        console.log(err.status);
    }
    

    // const promise = axios.get('https://jsonplaceholder.typicode.com/todos/')
    // // res.send('<h1>List of all the tasks</h1>');
    // // console.log(promise);
    // promise
    // .then((response) => {
    //     // console.log(response.data);
    //     // res.render('tasks', {tasks: response.data});
    //     res.json(response.data);
    // }).catch((err) => console.log(err.status));

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
