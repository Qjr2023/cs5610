const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    const promise = axios.get('https://jsonplaceholder.typicode.com/todos/')
    // res.send('<h1>List of all the tasks</h1>');
    // console.log(promise);
    promise.then((response) => {
        // console.log(response.data);
        // res.render('tasks', {tasks: response.data});
        res.json(response.data);
    });

});

router.get('/:taskId', (req, res) => {
    console.log(req.params.taskId);
    res.render('task', {id: req.params.taskId});
    // res.send(`<p>You are reviewing task ${req.params.taskId}</p>`)
});

module.exports = router;
