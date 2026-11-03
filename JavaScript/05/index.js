// function greet() {
//     console.log("Welcome");
// };
// greet();


// function table(x) {
//     let i = 1;
//     while (i < 11) {
//         console.log(`${x} x ${i} = ${x * i}`);
//         i += 1;
//     };
// };
// table(prompt("Enter the value"));


// // function declaration
// function smartgreet(n) {
//     console.log(`Hello ${n}`);
// };
// invocation call
// smartgreet(prompt("Enter your name"));


// function printPrice(item, usd) {
//     const p = Math.round(usd * 100);
//     console.log(`${item} : ${p}`);
// };
// printPrice("Honey Jar", 6.99);
// printPrice("Kiwi", 2.49);


// multiple ways to call or use a function
// function add(x, y) {
//     return x + y;
//     // console.log(x + y);
// };
// let result = add(32, 45);
// console.log(result);
// console.log(add(45, 54));
// let k = add(32, 68) * 10;
// console.log(k);
// console.log(add(43, 64) * 32);


// function check() {
//     return "done";
//     console.log("Will this print");
//     // won't print because in function return behaves like break in a loop
// };
// console.log(check());


// function introduce(name, city) {
//     console.log(`${name} lives in ${city}`);
// };
// // parameter > argument (argument will be assigned to the parameter in order the ones left will be undefined)
// introduce("Yogesh");
// // parameter < argument (extra arguments will be discarded after assigning the arguments to parameters in order)
// introduce("Yogesh", "Areraj", "Motihari");


// // assigning default value to parameters
// function introduce(name = "Name", city = "City") {
//     console.log(`${name} lives in ${city}`);
// };
// introduce("Yogesh");
// // if no argument is given the parameters will be assigned the default value
// introduce();