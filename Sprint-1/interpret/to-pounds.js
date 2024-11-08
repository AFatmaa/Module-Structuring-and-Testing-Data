// This line initializes a string variable penceString with the value "399p". This represents a price in pence, where the last character 'p' indicates that the value is in pence
const penceString = "399p";

// This line removes the trailing 'p' character from the penceString.
// That method extracts the portion of the string from the beginning (index 0) up to one character before the end.
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

// This line ensures the string representing the pence has at least 3 digits, padding it with leading zeros if necessary.
// .padStart(3, "0") pads the string to a length of 3, adding leading zeros. If the number of pence is less than 3 digits (for example, 9), it will add a "0" at the start, making it "009".
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// This line extracts the "pounds" part of the value.
// .substring(0, paddedPenceNumberString.length - 2) takes the string and extracts everything except the last 2 characters (e.g., "3" from "399").
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

// This line extracts the "pence" part of the value and ensures it is formatted as a 2-digit number.
// .substring(paddedPenceNumberString.length - 2) extracts the last 2 digits of the padded string, representing the pence (e.g., "99" from "399").
// .padEnd(2, "0") ensures that if the pence portion is only 1 digit (e.g., 9), it will be padded with a zero to ensure it's always two digits (e.g., "09").
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

// This line formats and logs the final output to the console in the format of pounds and pence (e.g., "£3.99").
// It uses string interpolation (£${pounds}.${pence}) to combine the pounds and pence parts into a final price string, with a decimal point separating them.
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
