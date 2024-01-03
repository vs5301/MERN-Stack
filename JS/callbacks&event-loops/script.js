// Behaving as a normal function parameter/argument/variable

// create callback function

function myCallbackFn() {
    console.log("Hello this is a simple callback function");
}

// Usage
function logMessage(callback) {
    // execute the callback fn
    callback()
}

// call HOF
logMessage(myCallbackFn)

logMessage(function () {
    console.log("Hello this is a simple callback function");
})

// Returning a callback function method 1
function logMessage(callback) {
    // execute the callback fn
    callback()
}

const result = logMessage(() => {
    return "Hello this is a simple callback function"
})

// passing parameters to the callback function
const logMessageHOF = (callback) => {
    const result = callback("Agnes", "Appiah")
    console.log(result);
}

const logMessageCallbackFn = (firstName, lastName) => {
    return `Hello ${firstName} ${lastName} this is a simple cb`
}

// call HOF
logMessageHOF(logMessageCallbackFn)

// HOF with paramter and call back function
const calculateSumHOF = (a, b, callback) => {
    const result = a + b;
    callback(result)
}

calculateSumHOF(2, 3, (result) => {
    console.log(result);
})

// Nested Timeout Functions

const task1 = (callback) => {
    setTimeout(() => {
        console.log("Task 1 Completed");
        callback();
    }, 3000)
}

const task2 = (callback) => {
    setTimeout(() => {
        console.log("Task 2 Completed");
        callback()
    }, 3000)
}

const task3 = (callback) => {
    setTimeout(() => {
        console.log("Task 3 Completed");
        callback();
    }, 1000)
}

// starting first task
task1(function () {
    task2(function () {
        task3(function () {
            console.log("All the tasks completed");
        })
    })
})

// fetch user data(dummy)
const userData = { id: 1, name: 'Agnes Appia' }
const usersPosts = [
    { id: 101, content: "Post 1" },
    { id: 102, content: "Post 2" },
]

const postComments = {
    101: ["comment 1", "comment"],
    102: ["comment 1", "comment"],
}

// fetch user data
const fetchUserData = (userId, callback) => {
    console.log('Fetching user data');
    setTimeout(() => {
        callback(userData)
    }, 1000)
}

// fetch user posts
const fetchUserPosts = (userId, callback) => {
    console.log('Fetching user posts...');
    setTimeout(() => {
        callback(usersPosts)
    }, 1000)
}

// fetch user comments
const fetchPostComments = (postId, callback) => {
    console.log('Fetching post comments');
    setTimeout(() => {
        callback(postComments[postId] || [])
    }, 1000)
}

// initiate the process
fetchUserData(1, function (userData) {
    console.log(userData);
})

fetchUserData(1, function (userData) {
    console.log("User posts", userData);
    fetchUserPosts(userData.id, function (usersPosts) {
        console.log("User posts", usersPosts);
        usersPosts.forEach(function (post) {
            console.log('Post', post);
            fetchPostComments(post.id, function (comments) {
                console.log("Comments", comments);
            })
        })
    })
})

// Simple calc with errors

const divideNumbers = (dividend, divisor, callback) => {
    setTimeout(() => {
        if (dividend === 0) {
            callback(new Error('Cannot divide by zero'), null)
        } else {
            callback(null, dividend/divisor)
        }
    }, 1000)
}

divideNumbers(10, 2, function (error, result) {
    if (error) {
        console.log(('Error', error.message));
    } else {
        console.log('Result', result);
    }   
})