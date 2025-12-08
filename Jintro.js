//The Assignment Operator = assigns values
// The Addition Operator + adds values
// The Multiplication Operator * multiplies values
// The Comparison Operator > compares value

a=2;
b=5;
c=a+b;
d=a*b;
console.log(c);
console.log(d);

// JavaScript Arithmetic Operators
// Arithmetic Operators are used to perform arithmetic on numbers
e = 3
let f = (3*35) + e;
console.log(f);


// Operator & Description
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation
// /	Division
// %	Modulus (Division Remainder)
// ++	Increment
// --	Decrement

// JavaScript String Addition
// The + can also be used to add (concatenate) strings

let fname = "AbdulRahman"
let lname = "Anifowose"
let fullName = fname +" " + lname;
console.log(fullName);

// The += assignment operator can also be used to add (concatenate) strings:

let word1 = "Hello"
word1 += "world";
console.log(word1);

// Adding Strings and Numbers
// Adding two numbers, will return the sum as a number like 5 + 5 = 10.

// Adding a number and a string, will return the sum as a concatenated string like 5 + "5" = "55".

let g= 5 + 5;
let h = 5 + "5";
let i = "Hello" + 5;
console.log(g);
console.log(h);
console.log(i);

// JavaScript Assignment Operators
// Assignment operators assign values to JavaScript variables.
// The Addition Assignment Operator (+=) adds a value to a variable

// Operator	Example	Same As
// =	x = y	x = y
// +=	x += y	x = x + y
// -=	x -= y	x = x - y
// *=	x *= y	x = x * y
// /=	x /= y	x = x / y
// %=	x %= y	x = x % y
// **=	x **= y	x = x ** y

// JavaScript Comparison Operators
// Comparison operators are used to compare two values.

// Comparison operators always return true or false

let x = 5;
let result = x > 8;
console.log(result);

// Operator     Description         Example
// ==           equal to	        x == 5
// ===	        equal value & 
//              equal type	        x === 5
// !=	        not equal	        x != 5
// !==	        not equal value
//              not equal type	    x !== 5
// >	        greater than	    x > 5
// <	        less than	        x < 5
// >=	        greater than
//              or equal to	        x >= 5
// <=	        less than or 
//              equal to	        x <= 5

// JavaScript Logical Operators

// Operator         Description
// &&	            logical and
// ||	            logical or
// !	            logical not

// JavaScript if else
// The if statement executes a block if a condition is true. When the condition is false, it does nothing.

// But if you want to execute a statement if the condition is false, you can use an if...else statement.

// The following example uses the if...else statement to check if the age is greater than or equal to 18:

// let age = 18;

// if (age >= 18) {
//   console.log('You can sign up.');
// } else {
//   console.log('You must be at least 18 to sign up.');
// }
// Code language: JavaScript (javascript)
// In this example, the age is 18. Therefore, the expression age >= 18 is true. Hence, you’ll see the following message in the console:

// You can sign up.
// Code language: JavaScript (javascript)
// The following example is the same as above except that the age is 18 instead of 16:

// let age = 16;

// if (age >= 18) {
//   console.log('You can sign up.');
// } else {
//   console.log('You must be at least 18 to sign up.');
// }
// Code language: JavaScript (javascript)
// Output:

// You must be at least 18 to sign up.

let age = 16;
let country = 'USA';

if (age >= 16 && country === 'USA') {
  console.log('You can get a driving license.');
} else {
  console.log('You are not eligible to get a driving license.');
}

// JavaScript Functions
// Declaring a function
// To declare a function, you use the function keyword, followed by the function name, a list of parameters, and the function body as follows:

// function functionName(parameters) {
//     // function body
//     // ...
// }

function greet(user){
  console.log("Hello " + user + ", welcome to our website!");
}
greet("AbdulRahman");
greet("Anifowose");

// Calling a function
// To use a function, you need to call it. Calling a function is also known as invoking a function.

// To call a function, you use its name followed by arguments enclosed in parentheses like this:

// functionName(arguments);

function add(a, b){
  return a + b;
}
let sum = add(3, 7);
console.log(sum);

// Comparing Function Values

function compare(a, b){
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1
  }
}

// The function immediately stops executing when it reaches the return statement. Therefore, you can use the return statement without a value to exit the function prematurely, like this:

function say(message) {
  // show nothing if the message is empty
  if (!message) {
    return;
  }
  console.log(message);
}

// The arguments object
// Inside a function, you can access an object called arguments that represents the named arguments of the function.

// The arguments object behaves like an array though it is not an instance of the Array type.

// For example, you can use the square bracket [] to access the arguments: arguments[0] returns the first argument, arguments[1] returns the second one, and so on.

// You can also use the length property of the arguments object to determine the number of arguments.

// The following example implements a generic add() function that calculates the sum of any number of arguments.

function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
// Code language: JavaScript (javascript)
// Hence, you can pass any number of arguments to the add() function, like this:

// console.log(add(1, 2)); // 3
// console.log(add(1, 2, 3, 4, 5)); // 15
// Code language: JavaScript (javascript)
// Function hoisting
// In JavaScript, you can use a function before declaring it. For example:

showMe(); // a hoisting example

function showMe() {
  console.log('an hoisting example');
}
// Code language: JavaScript (javascript)
// This feature is called hoisting.

// Function hoisting is a mechanism in which the JavaScript engine physically moves function declarations to the top of the code before executing them.

// The following shows the version of the code before the JavaScript engine executes it:

function showMe() {
  console.log('a hoisting example');
}

showMe(); // a hoisting example
// Code language: JavaScript (javascript)
// Function hoisting allows you to call a function before declaring it, making the development workflow more smoothly.

// Summary
// Use the function keyword to declare a function.
// Use the functionName() to call a function.
// All functions implicitly return undefined if they don’t explicitly return a value.
// Use the return statement to return a value from a function explicitly.
// The arguments variable is an array-like object inside a function, representing function arguments.
// The function hoisting allows you to call a function before declaring it.

// ARRAY
// This ia a data structure that is use to represent a list of items

let selctedColors = ["red", "blue", "green"];
console.log(selctedColors);
console.log(selctedColors.length);
console.log(selctedColors[0]);

selctedColors[3] = "yellow";
console.log(selctedColors);

selctedColors.push(17);
console.log(selctedColors);

selctedColors.unshift("black");
console.log(selctedColors);

selctedColors.pop();
console.log(selctedColors);

selctedColors.shift();
console.log(selctedColors);

// FOR STATEMENT
// A for loop repeats until a specified condition evaluates to false.

// for (initialization; condition; afterthought)
//  statement

// eg
for (let y=3; y<=5; y++){
  console.log(y)
}

// do...while statement
// The do...while statement repeats until a specified condition evaluates to false.

// A do...while statement looks as follows:

// do
//   statement
// while (condition);

let z = 1;
do {
  z += 1;
  console.log(z);
} while (z < 5);

