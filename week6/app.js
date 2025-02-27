// use write file to write the data to the file
// const fs = require('fs');
// fs.writeFile("data.text", "Hello, this is a test", (err) => {
//     if (err) {
//         console.log("File failed")
//     }
//     else {
//         console.log("File written")
//         fs.readFile("data.text", "utf8", (err, data) => {
//             if (err) {
//                 console.log("File failed")
//             }
//             else {
//                 console.log(data)
//             }
//         });
//     }
// }); 

// const logger = require('./logger.js');
// logger.log();
const db = require('./db.js');
console.log(db);
const express = require('express');
const app = express();
app.use(express.static("public"));
app.set("view engine", "pug");
app.set("views", "./views");

const taskRouter = require("./routes/tasks");
app.use("/tasks", taskRouter)
app.get('/', (req, res) => {
    res.send("Hello World");
});
const port = 3000;

// app.listen(port, async function() => {
    
// }
app.listen(port, async function() {
    await db.connect();
    console.log(`Server is running on port ${port}`);
    db.addToDB({name: "Task 1", description: "This is the first task"});
});

app.get('/tasks', (req, res) => {
    res.send('<h1>List of all the tasks</h1>');
});

app.get('/tasks/:taskId', (req, res) => {
    console.log(req.params.taskId);
    res.send(`<p>You are reviewing task ${req.params.taskId}</p>`)
});

