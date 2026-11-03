// 10 hello world loop
// let i = 0;
// while (i < 10) {
//     console.log("Hello, World");
//     i += 1;
// };


// multiplication table
// let i = 1;
// while (i < 11) {
//     let j = 2 * i
//     console.log("2 *", i, "=", j);
//     i++;
// };

// -------------------------------------------------

// let i = 0;
// do {
//     console.log("Hello, World");
//     i++;
// } while (i < 10) {}


// let i = 1;
// do {
//     let j = 2 * i;
//     console.log("2 *", i, "=", j);
//     i++;
// } while (i < 11) {}

// -------------------------------------------------

// taking input (string by default like python) using prompt() function & converting to integer using parseInt
// prompt() function gives a pop on the site asking for the input
// let age = parseInt(prompt("Enter Your Age"));
// console.log(age, typeof(age));
// NaN (not a number)

// parseFloat
// let age = parseFloat(prompt("Enter Your Age"));
// console.log(age, typeof(age));

// -------------------------------------------------

// alert is used to give a pop-up on the web-page with desired message
// alert only expects one argument so if we use comma it won't print anything written after comma so we use + (addition) symbol
// alert("Birthday Page");
// alert("age, hello" + " " + "what") // (here it will print both arguments like concatenation in python without any default space between then)

// let firstName = prompt("Enter your name");
// console.log("My first Name is", firstName, "thank you for listening.", "Happy Birthday");

// template literals (like f-string in python, before curly bracket we use dollar ($) symbol and instead of single or double quotes we use back-ticks (``))
// console.log(`My first Name is ${firstName} thank you for listening. Happy Birthday`);

// -------------------------------------------------

// let age = parseInt(prompt("Enter your age"));
// console.log(`Next year you'll be ${age + 1} years old.`)


// let i = 0;
// let total = 0;
// let userInput = prompt("Enter expense");
// while (userInput != "done") {
//     total += parseInt(userInput);
//     userInput = prompt("Enter expense", i);
//     i++;
// };
// alert(`Total amount is ${total}`);


// let total = 0;
// let spend;
// do{
//     spend = prompt("Enter expense");
//     if (spend != "done") {
//         total += parseFloat(spend);
//     }
// } while (spend != "done");
// alert(`Your total expense is ${total}`);

// let total = 0;
// let spend;
// do{
//     spend = prompt("Enter expense");
//     total += parseFloat(spend)
// } while (spend != "done");
// alert(`Your total expense is ${total}`);

// let total = 0;
// let spend;

// do {
//     // 1. Just get the input, no math here
//     spend = prompt("Enter expense");
    
// // 2. Do the math directly inside the condition line using the logical AND (&&) operator
// } while (spend !== "done" && spend !== null && (total += parseFloat(spend)));

// alert(`Your total expense is ${total}`);

// let total = 0;
// let spend;

// do {
//     spend = prompt("Enter expense");
//     // Convert to number; if it's text like "done", it safely becomes 0
//     total += parseFloat(spend) || 0; 
// } while (spend !== "done" && spend !== null);

// alert(`Your total expense is ${total}`);

// -------------------------------------------------

// Round / ceil --> 12.1 will be 13 / floor --> 12.1 will be 12
// let smallNumber = 12.5
// console.log(Math.ceil.smallNumber)