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

app.get('/', (req, res) => {
    res.send("Hello World");
});
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});