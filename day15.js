// task 1

// function outer() {

//     let x = 4;

//     function inner() {
//         console.log(x)
//     }
//     inner()
// }


// outer();

// function maintainPrivateCounter(){
//     let count=0

//     function increment(){
//         count+=1;
//         return count;
//     }

//     return increment;
// }

// const count=maintainPrivateCounter();
// console.log(count())
// console.log(count())

// task 2
// function generateId() {
//     let ID = Math.floor(Math.random() * 100);
//     console.log(ID)
//     function increment() {
//         ID += 1
//         return ID;
//     }
//     return increment;
// }

// const increase=generateId();
// console.log(increase());
// console.log(increase())


// function capture(username){

//     function greet(){
//         console.log(`How are you ${username}`)
//     }
//     return greet;
// }

// let message=capture("pappu");
// message()

// task 3

// function createFunArray() {
//     let funs = []
//     for (let i = 0; i < 4; i++) {
//         funs.push(function () {
//             console.log(`${i}`);
//         })
//     }
//     function printIndex() {
//         for (let value in funs) {
//             let fun = funs[value];
//             fun();
//         }

//     }
//     return printIndex;
// }

// const loop = createFunArray()
// loop()


// task 4 module pattern

// import { createList } from "./data.js";

// const collection=createList();
// collection.add(2);
// collection.add(3);
// collection.display();
// collection.remove();
// collection.display();


// task 5 Memorization
// Memoization function
// function memorize(fun) {
//    const memory = {};

//     return function (...args) {
//         let key = args.join(",");
//         if (memory[key] !== undefined) {
//             console.log("Fetching the result for", args);
//             return memory[key]
//         }
//         const result = fun(...args);
//         memory[key] = result;
//         return result;
//     }

// }
// const cal = memorize((num1, num2) => {
//     return num1 + num2;
// });




// console.log(cal(2,3));
// console.log(cal(2,3));

// factorial using closure

// function factorial(n, memory = {}) {
//     if (n in memory) {
//         return memory[n];
//     }

//     if (n == 1 || n == 0)
//         return 1;

//     memory[n] = n * factorial(n - 1, memory);
//     return memory[n];
// }

// console.log(factorial(3));
// console.log(factorial(2));