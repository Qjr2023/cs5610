const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../db.js');
const { ObjectId } = require('mongodb');

router.post('/', async(req, res) => {
    try {
        await db.addToDB(req.body);
        res.redirect('/tasks');
    } catch (err) {
        console.log(err.status);
    }
}
)

router.get('/newtask', async(req, res) => {
    try {
        res.render('taskForm');
    } catch (err) {
        console.log(err.status);
        res.status(500).send("Error adding task");
    }
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

router.get('/:taskId', async (req, res) => {
    try {
        const taskId = req.params.taskId;
        if (!ObjectId.isValid(taskId)) {
            return res.status(400).send("Invalid Task ID");
        }
        const task = await db.findOneTask({ _id: new ObjectId(taskId) });
        if (!task) {
            return res.status(404).send("Task not found");
        }
        res.render("taskId", {
            id: taskId, 
            title: task.title,
            completed: task.completed || false, 
            date: task.date || "No date provided" 
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error retrieving task");
    }
});

router.delete("/:taskId", async (req, res) => {
    console.log("in router delete ", req.params.taskId);
    try {
      const result = await db.deleteOne({ _id: new ObjectId(req.params.taskId) });
      console.log(result);
      return res.status(200).json({ message: "Task deleted" }); // ✅ Success response
  
      // res.redirect("/api/tasks");
    } catch (err) {
      console.log("delete router ", err);
    }
  });
  
module.exports = router;
