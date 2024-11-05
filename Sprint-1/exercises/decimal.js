const num = 56.5678;

// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
wholeNumberPart = Math.floor(num); // Math.floor() removes the decimal part by rounding down to the nearest whole number

// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )
decimalPart = parseFloat((num % 1).toFixed(4)); // num % 1 gives the decimal part, and toFixed(4) rounds it to 4 decimal places

// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )
roundedNum = Math.round(num); // Math.round() rounds num to the nearest whole number

// Log your variables to the console to check your answers

console.log(wholeNumberPart);
console.log(decimalPart);
console.log(roundedNum);