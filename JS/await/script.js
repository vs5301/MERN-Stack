// Simulating a delay

// creating
async function waitAndRun(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value)
        }, 3000)
    })
}

// usage
const getProcessedValue = async () => {
    const result = await waitAndRun('This is my promise')
    console.log(result);
}

getProcessedValue()

// Fetching multiple values in parallel
const getName = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("30")
        }, 1000)
    })
}

const getAge = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(30)
        }, 1000)
    })
}

async function getUserDetails() {
    const result = await Promise.all([getName(), getAge()])
    console.log(result);
}

getUserDetails()

async function randomOutcome() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('Success')
        } else {
            reject("Failed")
        }
    })
}

const handleOutcome = async () => {
    try {
        const result = await randomOutcome()
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

handleOutcome()