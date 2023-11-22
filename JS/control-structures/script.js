let inStock = true

if (inStock) {
    console.log("Item is instock, proceed");
}

let userAge = 19

if (userAge >= 18) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

let isLoggedIn = true

if (isLoggedIn) {
    console.log("Welcome Back ");
} else {
    console.log("Welcome, please login");
}

let isRegistered = true
if (isRegistered) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote, please register");
}

let trafficLight = "yellow"
if (trafficLight == "red") {
    console.log("STOP");
} else if (trafficLight == "yellow") {
    console.log("WAIT");
} else if (trafficLight == "green") {
    console.log("GO");
} else {
    console.log("Invalid traffic light");
}

let dayNumber = 2
switch (dayNumber) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
    default:
        console.log("Invalid number");
        break;
}