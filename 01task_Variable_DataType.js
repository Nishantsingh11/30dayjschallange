// Activites:
// Variable Declaration
// 1. declare a variable with var and assgin a number to it
var num = 10;
console.log(num);
// 2. declare a variable with "let" and assgin a String to it
let str = "hello world";
console.log(str);
// 3. declare a variable with "const" and assgin a boolean to it
const isToken = true;
console.log(isToken);
// 4. create variable with diffrent data types(number, string, boolean, array, object) and log each varibale type using typeof operator
const num1 = 10;
const str1 = "hello world";
const isToken1 = true;
const arr = [1, 2, 3, 4, 5];
const obj = { name: "john", age: 25 };
console.table([
  typeof num1,
  typeof str1,
  typeof isToken1,
  typeof arr,
  typeof obj
]);

// 5. declare a variable using "let" and assign a number to it. reassign a string to it and log the value

let num2 = 20;
console.log(num2);
num2 = "hello world";
console.log(num2);

// 6. declare a variable using "const" and assign a number to it. reassign a string to it and log the value
const num3 = 30;
console.log(num3);
// num3 = "hello world";
// console.log(num3); // TypeError: Assignment to constant variable.

const num4 = 40;
console.log(
  `the value of num4 is ${num4} and the type of num4 is ${typeof num4}`
);
