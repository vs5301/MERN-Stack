const fs = require("fs")

// Read a file

// Synchronous
const dataBuffer = fs.readFileSync("./sample.txt")
const content = dataBuffer.toString()
console.log(content);

// Asynchronous
fs.readFile("./sample.txt", "utf-8", (err, content) => {
    if (err) {
        console.log(err);
        throw err
    } else {
        console.log(content);
    }
})

// Write to a file
fs.writeFile("./new.txt", "some new content", (err) => {
    if (err) {
        console.log(err);
        return
    } else {
        console.log("File has been written");
    }
})

// Appending to a File
fs.appendFile("./new.txt", "Appended content", (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("File content appended");
    }
})


// Checking if a File exists
fs.access("./new2.txt", fs.constants.F_OK, (error) => {
    if (error) {
        console.log("File does not exist");
    } else {
        console.log("File exists");
    }
})

// Delete a file
fs.unlink("./new.txt", (error) => {
    if (error) {
        console.log(error);
        return
    } else {
        console.log("File has been deleted");
    }
})

// Using promise
const fs2 = require("fs/promises")

fs.readFile("./sample.txt", "utf-8", (err, content) => {
    if (err) {
        console.log(err);
        throw err
    } else {
        console.log(content);
    }
})

try {
    const content = fs2.readFile("./sample.txt", "utf-8")
    console.log(content);
} catch (error) {
    console.log(error);
}

const readFileContent = async () => {
    try {
        const content = await fs2.readFile("./sample.txt", "utf-8")
        console.log(content);
    } catch (error) {
        console.log(error);
    }
}

readFileContent()