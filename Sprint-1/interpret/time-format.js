const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 5 variable declarations in the program:
// const movieLength = 8784;
// const remainingSeconds = movieLength % 60;
// const totalMinutes = (movieLength - remainingSeconds) / 60;
// const remainingMinutes = totalMinutes % 60;
// const totalHours = (totalMinutes - remainingMinutes) / 60;

// b) How many function calls are there?
// There are no function calls in this program. The code uses operators and calculations directly but doesn't invoke any functions. 

// c) Using documentation, explain what the expression movieLength % 60 represents
// The expression movieLength % 60 uses the modulus operator %, which returns the remainder when movieLength is divided by 60. In this case, it represents the remaining seconds after calculating how many full minutes fit into the movie length.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// This line calculates the total number of full minutes in the movie, by:
// Subtracting the remaining seconds from movieLength (to remove any partial minute).
// Dividing the result by 60 to convert the remaining seconds into minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// A better name for this variable could be movieTime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code doesn't work for two issues:
// Non-integer movieLength values: The code assumes movieLength is a whole number of seconds. If the input is a non-integer (like 8784.5), the result might be incorrect due to how integer division and modulus work. For example, 8784.5 % 60 will give 24.5, which isn't an accurate way to handle seconds. We would need to round the value of movieLength to an integer or adjust the logic if non-integer values are possible.
// Negative movieLength values: If movieLength is negative, the code will return incorrect values because modulus and division operations on negative numbers behave differently.
// To improve that:
// Round movieLength to an integer before performing any calculations.
// Add validation to ensure movieLength is non-negative.
