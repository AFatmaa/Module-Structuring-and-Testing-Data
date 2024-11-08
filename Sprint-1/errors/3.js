// Solution 1: carNumber is defined as a number
const cardNumber1 = 4533787178994213;
// Convert cardNumber to a string to allow the use of slice,
// then get the last 4 digits.
const last4Digits1 = cardNumber1.toString().slice(-4);
console.log(last4Digits1);

// Solution 2: cardNumber is defined as a string 
const cardNumber2 = "4533787178994213";
// Directly use slice on cardNumber to get the last 4 digits,
// since it's already a string.
const last4Digits2 = cardNumber2.slice(-4);
console.log(last4Digits2);


// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
