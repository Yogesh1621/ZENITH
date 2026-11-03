// const student_name = "YOGESH";
// const city = "DELHI";
// const college = "ZENITH";
// const roll_no = "2616400084";

// --------------------------------------------------------------

// const title = "Hello";

// const student = {
//     name: "YOGESH",
//     city: "DELHI",
//     college: "Zenith",
//     rollNumber: "2616400084",
// };

// console.log(student);
// console.log(typeof student);

// --------------------------------------------------------------

// CRUD OPERATIONS

// // READ
// console.log(student.name);
// console.log(student["name"]);

// // READ (not present) --> undefined
// console.log(student.phoneNumber);
// console.log(student["phoneNumber"]);

// // CREATE
// student.country = "India";
// console.log(student);

// // UPDATE
// student.city = "Areraj";
// console.log(student);

// DELETE
// delete student.city;
// delete student["city"];
// console.log(student);

// --------------------------------------------------------------

// const product = {
//     title: "Monitor",
//     price: 7000,
// };

// const keyboard = product;

// keyboard.title = "Keyboard";
// console.log(keyboard);
// console.log(product);

// --------------------------------------------------------------

// ARRAY
const fruitsArr = ["Mango", "Grapes"];
console.log(fruitsArr);

const fruitsObj = {
    0: "Mango",
    1: "Grapes",
};
console.log(fruitsObj);

console.log(typeof fruitsArr);
console.log(typeof fruitsObj);

// READ
console.log(fruitsArr[0]);
console.log(fruitsObj[0]);

// CREATE
// fruitsArr[20] = "Apple";
// fruitsObj[20] = "Apple";
// console.log(fruitsArr);
// console.log(fruitsObj);
fruitsArr.push("Apple");
console.log(fruitsArr);