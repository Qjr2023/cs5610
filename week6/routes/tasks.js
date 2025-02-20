const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>List of all the tasks</h1>');
});

router.get('/:taskId', (req, res) => {
    console.log(req.params.taskId);
    res.render('task', {id: req.params.taskId});
    // res.send(`<p>You are reviewing task ${req.params.taskId}</p>`)
});

module.exports = router;
