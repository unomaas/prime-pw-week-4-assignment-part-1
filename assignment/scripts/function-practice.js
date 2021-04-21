console.log('***** Function Practice *****')

// Add the required code to complete the functions below.  After _each_ function, use a console log to call the function to test it and display the result.



// Ryan's Comment: I've been writing functions out in the concise arrow syntax (e.g., let function = () => {};), so if helps make the code more concise, I'm going to do both ways for practice, below, and number the questions in console.log outputs for easier reading.

// 1. Function to return 'Hello World!'
console.log("--- Question #1.a: EXAMPLE QUESTION ---"); // Adding in question labels to the console for easier reading.
function hello() {
  return 'Hello World!';
}
console.log('Test - should say "Hello World!"', hello());
// Ryan's Comment: Just practicing the concise arrow syntax, below:
console.log("--- Question #1.b: RYAN'S ADDED SHORTHAND REWRITE ---");
let hello1 = () => "Hello World!";
console.log(hello1());
console.log("\n");



// 2. Function to return an personalized hello, for example 'Hello, Jo!'
console.log("--- Question #2.a: ---")
function helloName(name) {
  return `Hello, ${name}!  Thank you for reviewing my code!`;
}
console.log(helloName("Dane"));
// And for the concise arrow re-write:
console.log("--- Question #2.b: ---");
const helloName1 = name => `Hello, ${name}!  Thank you for reviewing my code!`;
console.log(helloName1("Dane"));
console.log("\n");



// 3. Function to add two numbers together & return the result
console.log("--- Question #3.a: ---");
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(`The sum of those numbers is (expect 5): `, addNumbers(2, 3)); // Outputs the string with "5".
// And for the concise arrow re-write:
console.log("--- Question #3.b: ---");
const addNumbers1 = (firstNumber, secondNumber) => firstNumber + secondNumber;
console.log(`The sum of those numbers is (expect 5): `, addNumbers1(2, 3)); // Outputs the string with "5".
console.log("\n");



// 4. Function to multiply three numbers & return the result
console.log("--- Question #4.a: ---");
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log(`The product of those numbers is (expect 6): `, multiplyThree(1, 2, 3)); // Outputs the string with "6".
// And for the concise arrow re-write:
console.log("--- Question #4.b: ---");
const multiplyThree1 = (num1, num2, num3) => num1 * num2 * num3;
console.log(`The product of those numbers is (expect 6): `, multiplyThree1(1, 2, 3)); // Outputs the string with "6".
console.log("\n");



// Ryan's Comment: Since the concise arrow re-write won't drastically shorten the rest of the questions, I'll just be using that going forward, instead of using both.
// 5. Function that will return true if a number is positive, or greater than zero, and false otherwise
console.log("--- Question #5: ---");
const isPositive = number => {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
};
console.log('isPositive - should say true:', isPositive(3));
console.log('isPositive - should say false:', isPositive(0));
console.log('isPositive - should say false:', isPositive(-3));
console.log("\n");



// 6. Function to return the _last_ item in an array. If the array is empty, return `undefined`.
console.log("--- Question #6: ---");
const questionSixEmptyArray = [];
const questionSixArray = ["First", "Middle", "Last"];
console.log(`The value of 'questionSixArray' is: `, questionSixArray);
console.log(`The value of 'questionSixEmptyArray' is: `, questionSixEmptyArray);
const getLast = array => {
  return array[array.length -1];
};
console.log(`Testing the 'getLast(questionSixArray)' function (expect 'Last'): `, getLast(questionSixArray)); // Outputs "Last".
console.log(`Testing the 'getLast(questionSixEmptyArray)' function (expect 'undefined'): `, getLast(questionSixEmptyArray)); // Outputs "undefined".
console.log("\n");



// 7. Function to find a value in an array. Return true if the value is found and false otherwise. Use a loop; DO NOT use Array.includes, Array.indexOf, or Array.find.
console.log("--- Question #7: ---");
const questionSevenArray = [1, 2, 3];
console.log(`The value of 'questionSevenArray' is: `, questionSevenArray);
const find = (value, array) => {
  let isThere = false;
  for (let i = 0; i < array.length; i++) {
    if (value == array[i]) {
      isThere = true;
    }
  }
  return isThere;
};
console.log(`Testing the 'find(1)' function (expect 'true'): `, find(1, questionSevenArray)); // Returns "true".
console.log(`Testing the 'find(2)' function (expect 'true'): `, find(2, questionSevenArray)); // Returns "true".
console.log(`Testing the 'find(4)' function (expect 'false'): `, find(4, questionSevenArray)); // Returns "false".
console.log("\n");



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a string. Return true if it is, and false otherwise
console.log("--- Question #8: ---");
const isFirstLetter = (letter, string) => {
  if (letter == string[0]) {
    return true;
  } else {
    return false;
  }
};
console.log(`Testing the 'isFirstLetter("a", "apple")' function (expect 'true'):`, isFirstLetter("a", "apple"));
console.log(`Testing the 'isFirstLetter("z", "apple")' function (expect 'false'):`, isFirstLetter("z", "apple"));
console.log("\n");



// 9. Function to return the sum of all numbers in an array
console.log("--- Question #9: ---");
const questionNineArray1 = [0, 1, 2, 3, 4, 5]; // Sums to 15.
console.log(`The value of 'questionNineArray1' is: `, questionNineArray1);
const questionNineArray2 = [0, 1, 1, 2, 2, 3, 3]; // Sums to 12.
console.log(`The value of 'questionNineArray2' is: `, questionNineArray2);
const sumAll = array => {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
console.log(`Testing the 'sumAll(questionNineArray1)' function (expect '15'): `, sumAll(questionNineArray1)); // Console logs 15.
console.log(`Testing the 'sumAll(questionNineArray2)' function (expect '12'): `, sumAll(questionNineArray2)); // Console logs 12.
console.log("\n");



// 10. Function to return a new array of all positive (greater than zero) numbers contained in an input array. If there are no positive numbers, return an empty array. Note: The input array should not change.
console.log("--- Question #10: ---");
const questionTenArray = [0, 1, -3, 2, -9, 3, 0]; // Outputs "[0, 1, -3, 2, -9, 3, 0]".
console.log(`The value of 'questionTenArray' is: `, questionTenArray);
const positiveArray = array => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      result.push(array[i]);
    }
  }
  return result;
};
console.log(`Testing the 'positiveArray(questionTenArray)' function (expect '[1, 2, 3]'): `, positiveArray(questionTenArray)); // Outputs "[1, 2, 3]".
console.log(`To prove the array is unchanged, the value of 'questionTenArray' is: `, questionTenArray); // Outputs "[0, 1, -3, 2, -9, 3, 0]".
console.log("\n");



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
console.log("--- Question #11: ---");
console.log("Less Than 100: Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.");
  //  Examples
  //    lessThan100(22, 15) ➞ true
  //      // 22 + 15 = 37
  //    lessThan100(83, 34) ➞ false
  //      // 83 + 34 = 117
  // lessThan100(3, 77) ➞ true
const lessThan100 = (num1, num2) => {
  let sum = num1 + num2;
  if (sum < 100) {
    return true;
  } else {
    return false;
  }
};
console.log(`Testing the 'lessThan100(1, 1)' function (expect 'true'): `, lessThan100(1, 1)); // Outputs 'true'.
console.log(`Testing the 'lessThan100(99, 1)' function (expect 'false'): `, lessThan100(99, 1)); // Outputs 'false'.
console.log("\n");



console.log("--- Bonus Question #12: ---");
console.log("The last question was a little too easy, so I'm doubling up from Edabit.com for more practice.");
console.log("Basketball Points: You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.");
  // Examples
  // points(1, 1) ➞ 5
  // points(7, 5) ➞ 29
  // points(38, 8) ➞ 100
const points = (twos, threes) => {
  let total = (twos * 2) + (threes * 3);
  return total;
};
console.log(`Testing the 'points(15, 10)' function (expect '60'): `, points(15, 10));
console.log(`Testing the 'points(10, 15)' function (expect '65'): `, points(10, 15));
