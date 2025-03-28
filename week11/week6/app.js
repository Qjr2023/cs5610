const db = require('./db.js');
console.log(db);
const express = require('express');
const cors = require('cors');
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const taskRouter = require("./routes/tasks.js");
app.use("/api/tasks", taskRouter)
app.get('/', (req, res) => {
    res.send("Hello World");
});
const port = 3000;

app.listen(port, async function() {
    await db.connect();
    console.log(`Server is running on port ${port}`);
    // db.addToDB({name: "Task 1", description: "This is the first task"});
    
});

// app.get('/tasks', (req, res) => {
//     res.send('<h1>List of all the tasks</h1>');
// });

// app.get('/tasks/:taskId', (req, res) => {
//     console.log(req.params.taskId);
//     res.send(`<p>You are reviewing task ${req.params.taskId}</p>`)
// });

