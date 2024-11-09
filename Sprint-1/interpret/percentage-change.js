let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`); 

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Number(carPrice.replaceAll(",", "")) — This line calls two functions: .replaceAll() and Number().
// Number(priceAfterOneYear.replaceAll(",", "")) — This line also calls two functions: .replaceAll() and Number().
// console.log() - This is a function.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The issue is with the replaceAll() method call syntax. There's a syntax error because there is a missing comma between the arguments of the replaceAll() method. 

// c) Identify all the lines that are variable reassignment statements
// Variable reassignment means changing the value of a variable that was previously declared. Here are the reassignment lines:
// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
// Variable declaration means creating a new variable. Here are the declaration lines:
// let carPrice = "10,000";
// let priceAfterOneYear = "8,543";
// const priceDifference = carPrice - priceAfterOneYear;
// const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression Number(carPrice.replaceAll(",", "")) is doing the following:
// carPrice.replaceAll(",", "") — This method call removes all commas from the string value of carPrice. For example, "10,000" becomes "10000".
// Number(...) — This converts the string "10000" into the numeric value 10000.
// Purpose: The purpose of this expression is to convert a formatted string (with commas as thousands separators) into a number so that mathematical operations can be performed on it.
