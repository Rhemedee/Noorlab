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


// ARRAY

// Filtered Array, Mapping, Find,  foreach
const items = [
  {name: "Top", price: 500},
  {name: "Trouser", price: 400},
  {name: "cap", price: 350},
  {name: "Agbada", price: 900},
  {name: "Danshiki", price: 600}
]

const filtereditems = items.filter((item) => {return item.price <=500})

const itemsName = items.map((items => {
  return items.name
}))

const finditem = items.find((items => {
  return items.name === "cap"
}))

items.forEach((items => {
  console.log(items.price)
}))

const hascostitems = items.some((items => {
  return items.price >= 600
}))

const checkprice = items.every((items) => {
  return items.price >= 100
})

const totalPrice = items.reduce((currentTotal, items) => {
  return items.price + currentTotal
}, 0)


console.log(filtereditems)
console.log(itemsName)
console.log(finditem)
console.log(items)
console.log(hascostitems)
console.log(checkprice)
console.log(totalPrice)

// Include
const num = [2,3,4,5,6]
const incude = num.includes(4)

console.log(incude)

// Introduction to the JavaScript objects

// let person = {
//   firstName: 'John',
//   lastName: 'Doe'
// };

// Accessing properties
// To access a property of an object, you use one of two notations: the dot notation and array-like notation.

// 1) The dot notation (.)
// The following illustrates how to use the dot notation to access a property of an object:

// objectName.propertyName

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person['firstName']);
console.log(person['lastName']);

// When a property name contains spaces, you need to place it inside quotes. For example, the following address object has the 'building no' as a property:

let address = {
  'building no': 3960,
  street: 'North 1st street',
  state: 'CA',
  country: 'USA'
};
console.log(address['building no'])

// Modifying the value of a property
// To change the value of a property, you use the assignment operator (=). For example:

let me = {
    firstName: 'John',
    lastName: 'Doe'
};

person.firstName = 'Jane';
person.age = 22
person.class= "grade 2"

console.log(person);

// delete

delete person.class
console.log(me)

// Checking if a property exists
// To check if a property exists in an object, you use the in operator:

// propertyName in objectName
// The in operator returns true if the propertyName exists in the objectName.

// The following example creates an employee object and uses the in operator to check if the ssn and employeeId properties exist in the object:

let employee = {
    firstName: 'Peter',
    lastName: 'Doe',
    employeeId: 1
};

console.log('ssn' in employee);
console.log('employeeId' in employee);


// DOM

// EXAMIN THE DOCUEMENT OBJECT 

console.dir(document)
console.dir(document.image)
console.dir(document.URL)
console.dir(document.domain)

// GETELEMENTBYID
// let headertitle = document.getElementById("header-title")
// let header = document.getElementById("main-header")
// // headertitle.textContent = "Hello"
// // headertitle.innerHTML = "Goodbye"

// headertitle.innerHTML = '<h3> TOBY </h3>';
// headertitle.style.border = '2px solid #000'
// header.style.backgroundColor = 'Yellow'

// GETELEMENTSBYCLASSNAME
// let item = document.getElementsByClassName('list-group-item')
// console.log(item);
// console.log(item[3]);
// item[3].textContent = 'Changed';
// item[3].style.backgroundColor = 'Blue'

// // item.style.backgtoundColor = '#f4f4f4';
// // this will give erroe

// for(i = 0; i < item.length; i++){
//   item[i].style.backgroundColor = '#f4f4f4'
// }

// GETELEMENTBYTAGNAME
// let li = document.getElementsByTagName('li')
// console.log(li);
// console.log(li[2]);
// li[2].textContent = 'Changed';


// // item.style.backgtoundColor = '#f4f4f4';
// // this will give erroe

// for(let i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4'
// }


// QUERY SELECTOR
// let header = document.querySelector('#main-header');
// header.style.borderButtom = 'solid 6px #ff0000';

// let input = document.querySelector('input');
// input.value = "Thanks";

// let submit = document.querySelector('input[type = submit]');
// submit.value = 'Send'

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red'

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'grey'

// QUERYSELECTORALL
// titles = document.querySelectorAll('.title')
// console.log(titles)

// titles[0].textContent = 'HI'

// odd = document.querySelectorAll('li:nth-child(odd)');
// even = document.querySelectorAll('li:nth-child(even)');

// for(let i = 0; i < odd.length; i++ ){
//   odd[i].style.backgroundColor = 'grey';
//   even[i].style.backgroundColor = 'blue'
// }

// How to Listen to DOM Events
// To listen for an event, you need to attach an event listener to an element by using the addEventListener() method.

// The addEventListener() method accepts two parameters:

// The event type to listen to
// A function to run when the event is triggered

// Element.addEventListener(type, function);

// CHANGE THE TEXT THE H2 ADD ITEM TEXT

// const button = document.getElementById("subButton");


// function newText(event){
//   const text = document.getElementById("add")
//   text.innerText = "Include Item"
// }

// button.addEventListener("click", newText)

// Keyboard Events
// For the keyboard, you can track the keydown and keyup events, which run when you press and release a key, respectively.

// To show you an example, run the following code from the console:

// document.addEventListener("keydown", event => {
//   console.log(`A key was pressed: ${event.key}`)
// });

// document.addEventListener("keyup", event => {
//   console.log(`A key was released: ${event.key}`)
// });


// Mouse Events
// Aside from keyboard events, the DOM also provides a way to track any mouse events.

// The most common mouse events that you can track are:

// mousedown – the mouse button was pressed
// mouseup – the mouse button was released
// click – a click event
// dblclick – a double click event
// mousemove – when the mouse is moved over the element
// contextmenu – when the context menu is opened, for example on a right mouse button click

// Again, you can test these events by adding an event listener directly to the document object:

// document.addEventListener("mousedown", event =>{
//   console.log(`The mouse was pressed`)
// });

// document.addEventListener("mouseup", event =>{
//   console.log(`The mouse was released`)
// });


// How to Listen to Events using HTML Attributes
// Aside from using the addEventListener() method, you can also listen to events by adding the on[eventname] attribute to your HTML elements.

// For example, suppose you want to listen to a button click. You can add the onclick attribute to your button as follows:

// function handleClick(event){
//   alert(`The button has been clicked`)
// }

// In the button element above, we add the onclick property and pass the handleClick() function to it.

// When we click on the button, the handleClick() function will be executed.

// You can also add the onclick attribute using JavaScript as follows:

// const myBtn = document.getElementById("button")
// myBtn.onclick = handleClick;

// function handleClick(event){
//   alert(`The button has ben clicked`)
// }

// Referencing forms
// To reference the <form> element, you can use DOM selecting methods such as getElementById():

// const form = document.getElementById('subscribe');

// Code language: JavaScript (javascript)
// An HTML document can have multiple forms. The document.forms property returns a collection of forms (HTMLFormControlsCollection) on the document:

// document.forms

// Code language: JavaScript (javascript)
// To reference a form, you use an index. For example, the following statement returns the first form of the HTML document:

// document.forms[0]


// Submitting a form
// This section is where the real "magic" happens in web development! This is how you control what happens when a user clicks that "Submit" button.

// Here is the breakdown of the most important concepts from your text:

// 1. The Submit Event vs. The Submit Method
// There is a big difference between the event and the method:

// The Event (submit): This is like a "warning bell." It rings the moment the user clicks the button. This is your chance to check if they filled out the form correctly.

// The Method (form.submit()): This is a command you give in your code to force the form to send data.

// Important Note: As your text mentioned, if you use the method form.submit(), the "warning bell" (event) won't ring. You have to do your checks manually before calling it.

// 2. The Power of event.preventDefault()
// By default, when you click a submit button, the browser immediately tries to refresh the page or go to a new URL to send the data.

// If you use event.preventDefault(), you are telling the browser: "Wait! Don't send that yet. I want to check the data first."

// 3. Practical Example
// Here is how that looks in a real-world scenario:

// JavaScript

// const form = document.getElementById('signup');

// form.addEventListener('submit', (event) => {
//     const password = document.getElementById('password').value;

//     if (password.length < 8) {
//         // Stop the form from sending if the password is too short
//         event.preventDefault();
//         alert('Password must be at least 8 characters!');
//     }
// });


// Accessing form fields
// This section explains how to actually "grab" the data your users type into the boxes. It's the bridge between the user's keyboard and your JavaScript code.

// Here is the breakdown of what this text is teaching you:

// 1. The "Elements" Shortcut
// Instead of asking the computer to search the whole document (which we agreed is slower), you use form.elements.

// Imagine form.elements as a toolbox that automatically contains everything inside that specific form:

// form.elements[0] is the first tool in the box.

// form.elements['name'] is the tool labeled "name".

// 2. Name vs. ID
// In your HTML example, the input has both id="name" and name="name".

// The ID is usually for CSS (styling) or specific DOM selection.

// The Name is what the server usually looks for.

// In JavaScript, form.elements['name'] is smart enough to look for either the name or the ID to find the right box.

// 3. The .value Property
// This is the most important part of the code you pasted.

// form.elements['name'] gets you the entire HTML element (the whole input box).

// form.elements['name'].value gets you the actual text the user typed inside it (like "Todd").

const form = document.getElementById("signUp")

form.addEventListener(("submit"), (event) => {
  const firstName = document.getElementById("firstName").value

  if (firstName === ""){
    alert("Please enter your First Name")
  }
})

form.addEventListener(("submit"), (event) => {
  const lastName = document.getElementById("lastName").value

  if (lastName === ""){
    alert("Please enter your Last Name")
  }
})


form.addEventListener("submit", (event) => {
  const password = document.getElementById("password").value;

  if (password.length < 9 ){
    alert("Password Is not strong enough, must be atleast 8 Characters");
  }
})