// use write file to write the data to the file
const fs = require('fs');
fs.writeFile("data.text", "Hello, this is a test", (err) => {
    if (err) {
        console.log("File failed")
    }
    else {
        console.log("File written")
    }
}); 