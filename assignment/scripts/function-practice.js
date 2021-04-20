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



// 3. Function to add two numbers together & return the result
console.log("--- Question #3.a: ---");
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(`The sum of those numbers is:`, addNumbers(2, 3)); // Outputs the string with "5".
// And for the concise arrow re-write:
console.log("--- Question #3.b: ---");
const addNumbers1 = (firstNum, secondNum) => firstNum + secondNum;
console.log(`The sum of those numbers is:`, addNumbers1(2, 3)); // Outputs the string with "5".



// 4. Function to multiply three numbers & return the result
console.log("--- Question #4.a: ---");
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log(`The product of those numbers is: `, multiplyThree(1, 2, 3)); // Outputs the string with "6".
// And for the concise arrow re-write:
console.log("--- Question #4.b: ---");
const multiplyThree1 = (number1, number2, number3) => number1 * number2 * number3;
console.log(`The product of those numbers is: `, multiplyThree1(1, 2, 3)); // Outputs the string with "6".


// Ryan's Comment: Since the concise arrow re-write won't drastically shorten the rest of the questions, I'll just be using that, instead of using both.
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



// 6. Function to return the _last_ item in an array. If the array is empty, return `undefined`.
console.log("--- Question #6: ---");
const questionSixEmptyArray = [];
const questionSixArray = ["First", "Middle", "Last"];
console.log(`The value of 'questionSixEmptyArray' is: `, questionSixEmptyArray);
console.log(`The value of 'questionSixArray' is: `, questionSixArray);
const getLast = array => {
  return array[array.length -1];
};
console.log(`Testing 'getLast(questionSixArray)' function.  Expect 'Last': `, getLast(questionSixArray)); // Outputs "Last".
console.log(`Testing 'getLast(questionSixEmptyArray)' function.  Expect 'undefined': `, getLast(questionSixEmptyArray)); // Outputs "undefined".



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
console.log(`Testing 'find(1)' function.  Expect 'true': `, find(1, questionSevenArray)); // Returns "true".
console.log(`Testing 'find(2)' function.  Expect 'true': `, find(2, questionSevenArray)); // Returns "true".
console.log(`Testing 'find(4)' function.  Expect 'false': `, find(4, questionSevenArray)); // Returns "false".



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
console.log(`Testing 'isFirstLetter('a', 'apple')' function.  Expect 'true':`, isFirstLetter('a', 'apple'));
console.log(`Testing 'isFirstLetter('z', 'apple')' function.  Expect 'false':`, isFirstLetter('z', 'apple'));



// 9. Function to return the sum of all numbers in an array
console.log("--- Question #9: ---");
const quesitonNineArray1 = [0, 1, 2, 3, 4, 5]; // Sums to 15.
console.log(`The value of 'quesitonNineArray1' is: `, quesitonNineArray1);
const quesitonNineArray2 = [0, 1, 1, 2, 2, 3, 3]; // Sums to 12.
console.log(`The value of 'quesitonNineArray2' is: `, quesitonNineArray2);
const sumAll = array => {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
console.log(`Testing 'sumAll(quesitonNineArray1)' function.  Expect '15': `, sumAll(quesitonNineArray1)); // Console logs 15.
console.log(`Testing 'sumAll(quesitonNineArray2)' function.  Expect '12': `, sumAll(quesitonNineArray2)); // Console logs 12.



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
console.log(`Testing 'positiveArray(questionTenArray)' function.  Expect [1, 2, 3]: `, positiveArray(questionTenArray)); // Outputs "[1, 2, 3]".
console.log(`To prove the array is unchanged, the value of 'questionTenArray' is: `, questionTenArray); // Outputs "[0, 1, -3, 2, -9, 3, 0]".



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
console.log("--- Question #11: ---");
