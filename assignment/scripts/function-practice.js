console.log('***** Function Practice *****')

// Add the required code to complete the functions below.  After _each_ function, use a console log to call the function to test it and display the result.



// Ryan's Comment: Question #1 is the example question, correct?  I'll leave it as is, since it's completing it's goal. :)  Side note, I've been writing functions out in the shorthand syntax way (e.g., let function = () => {};), so I'm going to do both ways for practice, below, and number the questions in console.log outputs for easier reading.

// 1. Function to return 'Hello World!'
console.log("--- Question #1.a: EXAMPLE QUESTION ---"); // Adding in question labels to the console for easier reading.
function hello() {
  return 'Hello World!';
}
console.log('Test - should say "Hello World!"', hello());
// Ryan's Comment: Just practicing the shorthand syntax, below:
console.log("--- Question #1.b: RYAN'S ADDED SHORTHAND REWRITE ---");
let hello1 = () => "Hello World!";
console.log(hello1());



// 2. Function to return an personalized hello, for example 'Hello, Jo!'
console.log("--- Question #2.a: ---")
function helloName(name) {
  return `Hello, ${name}!  Thank you for reviewing my code!`;
}
console.log(helloName("Dane"));
// And for the re-write version, below:
console.log("--- Question #2.b: ---");
const helloName1 = name => `Hello, ${name}!  Thank you for reviewing my code!`;
console.log(helloName1("Dane"));



// 3. Function to add two numbers together & return the result
console.log("--- Question #3.a: ---");
function addNumbers(firstNumber, secondNumber) {
  let sum = firstNumber + secondNumber; // Making it easier to read with String Interpolation, so added a sum variable.
  return `The sum of ${firstNumber} and ${secondNumber} is: ${sum}`;
}
console.log(addNumbers(2, 3)); // Returns "5" in the String Interpolation to console.
// And for the re-write, in a less complicated way:
console.log("--- Question #3.b: ---");
const addNumbers1 = (firstNum, secondNum) => firstNum + secondNum;
console.log(addNumbers1(2, 3)); // Returns JUST "5" to console.



// 4. Function to multiply three numbers & return the result
console.log("--- Question #4.a: ---");
function multiplyThree(num1, num2, num3) {
  product = num1 * num2 * num3;
  return `The product of ${num1}, ${num2}, and ${num3}, is: ${product}`;
}
console.log(multiplyThree(1, 2, 3)); // Returns "6" in the String Interpolation to console.
// And for the re-write, in a less complicated way:
console.log("--- Question #4.b: ---");
const multiplyThree1 = (number1, number2, number3) => number1 * number2 * number3;
console.log(multiplyThree1(1, 2, 3)); // Returns JUST "6" to console.



// 5. Function that will return true if a number is positive, or greater than zero, and false otherwise
console.log("--- Question #5.a: ---");
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false).  Write a separate console.log statement for each outcome.
console.log('isPositive - should say true:', isPositive(3));
console.log('isPositive - should say false:', isPositive(0));
console.log('isPositive - should say false:', isPositive(-3));
// And for the re-write:
console.log("--- Question #5.b: ---");
const isPositive1 = number => {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
};
console.log('isPositive1 - should say true:', isPositive1(3));
console.log('isPositive1 - should say false:', isPositive1(0));
console.log('isPositive1 - should say false:', isPositive1(-3));



// 6. Function to return the _last_ item in an array. If the array is empty, return `undefined`.
console.log("--- Question #6.a: ---");
const emptyArray = [];
const exampleArray = ["First", "Middle", "Last"];
function getLast(array) {
  return array[array.length -1];
}
console.log(getLast(exampleArray)); // Returns "Last".
console.log(getLast(emptyArray)); // Returns "undefined".
// And for the re-write:
console.log("--- Question #6.b: ---");
const getLast1 = array => {
  return array[array.length -1];
};
console.log(getLast1(exampleArray)); // Returns "Last".
console.log(getLast1(emptyArray)); // Returns "undefined".



// 7. Function to find a value in an array. Return true if the value is found and false otherwise. Use a loop; DO NOT use Array.includes, Array.indexOf, or Array.find.
console.log("--- Question #7.a: ---");
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (value == array[i]) { // Something is wrong here with the comparative.
      return true;
    } else {
      return false;
    }
  }
}
console.log(find("Middle", exampleArray)); // Returns "true".
console.log(find("In Between", exampleArray)); // Returns "false".
// And for the re-write:
console.log("--- Question #7.b: ---");



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a string. Return true if it is, and false otherwise
console.log("--- Question #8.a: ---");
function isFirstLetter(letter, string) {
  if (letter == string[0]) {
    return true;
  } else {
    return false;
  }
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));
// And for the re-write:
console.log("--- Question #8.b: ---");
const isFirstLetter1 = (letter, string) => {
  if (letter == string[0]) {
    return true;
  } else {
    return false;
  }
};
console.log('isFirstLetter1 - should say true', isFirstLetter1('a', 'apple'));
console.log('isFirstLetter1 - should say false', isFirstLetter1('z', 'apple'));



// 9. Function to return the sum of all numbers in an array
console.log("--- Question #9.a: ---");
const sumArray1 = [0, 1, 2, 3, 4, 5]; // Sums to 15.
const sumArray2 = [0, 1, 1, 2, 2, 3, 3]; // Sums to 12.
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(sumAll(sumArray1)); // Console logs 15.
console.log(sumAll(sumArray2)); // Console logs 12.
// And for the re-write:
console.log("--- Question #9.b: ---");
const sumAll1 = array => {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
console.log(sumAll1(sumArray1)); // Console logs 15.
console.log(sumAll1(sumArray2)); // Console logs 12.



// 10. Function to return a new array of all positive (greater than zero) numbers contained in an input array. If there are no positive numbers, return an empty array. Note: The input array should not change.
console.log("--- Question #10.a: ---");
const positiveArray = array => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      result.push(array[i]); // Something's wrong here.
    }
    return result;
  }
};
console.log(positiveArray(sumArray1)); // Console logs "[1, 2, 3, 4, 5]".
console.log(sumArray1);


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
console.log("--- Question #11.a: ---");
