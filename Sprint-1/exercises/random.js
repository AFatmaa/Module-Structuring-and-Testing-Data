const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

// The code creates a random number between 1 and 100.

// It starts by using Math.random(), which gives a random decimal number between 0 and 1. This number could be something like 0.2345 or 0.8765.

// Next, it multiplies this random decimal by the size of the range, which is 100 (since we want a number between 1 and 100). This turns the decimal into a number between 0 and 99.9999.

// Then, Math.floor() rounds the result down to the nearest whole number. For example, if we had 57.789, it would round down to 57.

// Finally, the code adds 1 to the result. This is necessary because, without adding 1, the range would only go from 0 to 99. Adding 1 makes the range exactly 1 to 100, covering all values we want.
