// Converting a Number to a String
var age = 30
var ageStr = age.toString()

// Displaying a price
var price = 19.99

var displayPrice = "This price is $ " + price.toString()
console.log(displayPrice);
displayPrice = `The price is $${price}`
console.log(displayPrice);

// Using toString() with different bases
var decimalNum = 10
var binaryStr = decimalNum.toString(2)
var hexStr = decimalNum.toString(6)
console.log(hexStr);

// Working with BigInt
var bigIntNum = BigInt('90071938455566')
console.log(bigIntNum.toString());

// Formatting currency
var productPrice = 49.9555
formattedPrice = productPrice.toFixed(4)

// Scientific Data
var piApprox = 3.14149
var roundedPI = piApprox.toFixed(3)

console.log(roundedPI);

// Calculating Body Mass Index (BMI)
var weightKg = 70
var heightM = 1.75
var BMI = (weightKg / (heightM ** 2))
console.log(BMI.toFixed(1));

// Scientific Data Representation
var avogadroNumber = 6.02214076e23
var scientificNotation = avogadroNumber.toExponential()
console.log(scientificNotation);

var num = 10
var exponatedNum = num ** 2
console.log(exponatedNum);

// Converting user input to integer
var userInput = '42'
var userAge = parseInt(userInput, 10)
console.log(userAge);

// Extracting price from a text
var priceText = "Price: 100 USD"
var extractedPrice = parseInt(priceText.replace("Price: ", "").replace("USD", ""), 10)
console.log(extractedPrice);

// Converting binary data from a sensor
var sensorData = "1101"
var sensorDataDecimal = parseInt(sensorData, 2)
console.log(sensorDataDecimal);

// Converting Price for an E-Commerce Checkout
var checkoutPrice = "$99.99"
var checkoutPriceFloat = parseFloat(checkoutPrice.replace("$", ""))
console.log(checkoutPriceFloat);

// Extracting temperature data from a weather API
var apiTempData = "Temperature: 23.5*C"
var actualTempData = parseFloat(apiTempData.replace("Temperature:", "").replace("*C", ""))
console.log(actualTempData);

// Calculating Grade Point Average (GPA)
var inputGPA = "3.8"
var parsedGPA = parseFloat(inputGPA)

if (isNaN(parsedGPA)) {
    console.log('Invalid GPA input');
} else {
    console.log(`Your GPA is ${parsedGPA}`);
}

// Calculating savings after a transaction
var initialSavings = '1000'
var withdrawal = 'Hello'
var newSavings = parseFloat(initialSavings) - parseFloat(withdrawal)
console.log(newSavings);

if (isNaN(newSavings)) {
    console.log('Invalid transaction');
} else {
    console.log(`Your new savings aomunt is ${newSavings}`);
}

// Computing the area of circle
var radiusInput = '7'
var radius = parseFloat(radiusInput)
var area = Math.PI * Math.pow(radius, 2)
if (isNaN(area)) {
    console.log('Invalid radius');
} else {
    console.log(`The area of the circle is ${area}`);
}