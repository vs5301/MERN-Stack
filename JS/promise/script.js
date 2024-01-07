// Example 1 with Callback

// creation
function simpleCb1(success, cb) {
    console.log('Cb function called');
    if (success) {
        cb(null, "This operation was successful")
    } else {
        cb("The operation failed", null)
    }
}

// usage
simpleCb1(true, (err, result) => {
    if (err) {
        console.log(err)
    } else {
        console.log(result);
    }
    console.log("This always logs regardless of the operation");
})

// Example 1 convert to promise

// creation
const simplePromise = new Promise((resolve, reject) => {
    const success = true
    if (success) {
        // resolve the promise
        resolve('The promise operation was succesful')
    } else {
        // reject the promise
        reject('The operation was failed')
    }
})

// usage
simplePromise.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("This always logs regardless of the operation");
})

// Example 2 convert to use promise
function isEvenNumber(number, cb) {
    if (number % 2 === 0) {
        cb(null, `The number ${number} is event`)
    } else {
        cb(new Error(`The number ${number} is not even`))
    }
}

// usage
isEvenNumber(5, (err, result) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(result);
    }
})

function isEvenNumberPromise(number) {
    return new Promise((resolve, reject) => {
        if (number%2 === 0) {
            resolve(`The number ${number} is even`)
        } else {
            reject(`The number ${number} is not even`)
        }
    })
}

isEvenNumberPromise(4).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})

// First function returning a Promise

function stepOnePromise() {
    return new Promise((resolve) => {
        resolve("Step 1 completed")
    })
}

function stepTwoPromise() {
    return new Promise((resolve) => {
        resolve("Step 2 completed")
    })
}

function stepThreePromise() {
    return new Promise((resolve) => {
        resolve("Step 3 completed")
    })
}

// Chaining
// first promise
stepOnePromise().then((resultFromP1) => {
    console.log(resultFromP1);
    // second promise
    return stepTwoPromise()
}).then((resultFromP2) => {
    console.log(resultFromP2);
    // third promise
    return stepThreePromise()
}).then((resultFromP3) => {
    console.log(resultFromP3);
}).catch((err) => console.error(err))

// Promise.all

// create our promises
const promise1 = Promise.resolve("Promise 1 resolved")
const promise2 = Promise.resolve("Promise 2 resolved")

Promise.all([promise1, promise2]).then((result) => {
    console.log(result);
}).catch((err) => console.log(err))

// Promise.race
const promise3 = Promise.resolve("Promise 1 resolved")
const promise4 = Promise.reject(new Error("Promise 2 rejected"))

Promise.race([promise1, promise2]).then((result) => {
    console.log(result);
}).catch((err) => console.log(err))