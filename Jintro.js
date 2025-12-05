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
