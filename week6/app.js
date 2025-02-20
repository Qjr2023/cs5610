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

const express = require('express');
const app = express();
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send("Hello World");
});
const port = 3000;

app.get('/tasks', (req, res) => {
    res.send('<h1>List of all the tasks</h1>');
});

app.get('/tasks/:taskId', (req, res) => {
    console.log(req.params.taskId);
    res.send(`<p>You are reviewing task ${req.params.taskId}</p>`)
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});