console.log('***** Function Practice *****')

// Add the required code to complete the functions below.  After _each_ function, use a console log to call the function to test it and display the result.

// Ryan's Comment: Question #1 is the example question, correct?  I'll leave it as is, since it's completing it's goal. :)  Side note, I've been writing functions out in the shorthand syntax way (e.g., let function = () => {};), so I'm going to do both ways for practice, below, and number the questions in console.log outputs for easier reading.

// 1. Function to return 'Hello World!'
console.log("EXAMPLE: Question #1.a:");
function hello() {
  return 'Hello World!';
}
console.log('Test - should say "Hello World!"', hello());
// Ryan's Comment: Just practicing the shorthand syntax, below:
console.log("RYAN REWRITE: Question #1.b:");
let hello1 = () => "Hello World!";
console.log(hello1());

// 2. Function to return an personalized hello, for example 'Hello, Jo!'
console.log("Question #2.a:")
function helloName(name) {
  return `Hello, ${name}!  Thank you for reviewing my code!`;
}
console.log(helloName("Dane"));
// And for the re-write version, below:
console.log("Question #2.b:");
const helloName1 = name => `Hello, ${name}!  Thank you for reviewing my code!`;
console.log(helloName1("Dane"));

// 3. Function to add two numbers together & return the result
console.log("Question #3.a:");
function addNumbers(firstNumber, secondNumber) {
  let sum = firstNumber + secondNumber; // Making it unnecessarily complicated with String Interpolation, so added a sum variable.
  return `The sum of ${firstNumber} and ${secondNumber} is ${sum}.`;
}
console.log(addNumbers(2, 3)); // Returns "5" in the String Interpolation to console.
// And for the re-write, in a less complicated way:
console.log("Question #3.b:");
const addNumbers1 = (firstNum, secondNum) => firstNum + secondNum;
console.log(addNumbers1(2, 3)); // Returns JUST "5" to console.

// 4. Function to multiply three numbers & return the result
function multiplyThree( ){

}


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return;
  }
    return;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {

}

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){

}

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
