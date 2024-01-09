// analysing process
// console.log(process);

// Environment variables

// Accessing env variables
const appEnv = process.env.APP_ENV || "development"

// Display the env
console.log(`Our Node App is running ${appEnv}`);

// setting the env
// process.exit()

/*
// Check the current environment using the 'NODE_ENV' environment variable
if (process.env.NODE_ENV !== 'production') {
    // Display some error
    console.log('This script should only run in production');
    // Exit the process
    process.exit()
}
*/

// `process.cwd()` and `process.chdir(directory)`

// Log the current working directory of the process
console.log(`Current working directory ${process.cwd()}`);

try {
    // change the current working directory
    process.chdir("/tmp")
    // Log the new current working directory after the change
    console.log(`The new working directory is ${process.cwd()}`);
} catch (error) {
    // Log any error that might occur during the directory change
    console.log(`Something happened: ${error}`);
}