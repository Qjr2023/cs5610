const express = require('express');
const router = express.Router();
const axios = require('axios');

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
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`);
        // res.json(response.data);
        res.render('task', {id: req.params.taskId, title:response.data.title, completed: response.data.completed});
    } catch (err) {
        console.log(err.status);
    }

    // console.log(req.params.taskId);
    // res.send(`<p>You are reviewing task ${req.params.taskId}</p>`)
});

module.exports = router;
