// //task1


// function throwError() {
//     throw new Error("Intentional error thrown!");
// }

// try{
//     throwError();

// }catch(error){
//     console.log("Caught error",error);
// }



// function divide(num1, num2) {
//     if (num2 == 0) 
//         throw new Error("cannot divide by zero");
//     
//     else console.log(num1 / num2);
// }

// try {
//     divide(2, 2);
// } catch (error) {
//     console.log("caught error",error);
// }

// task 2

// try {
//     someRandomFun();
// } catch (error) {
//     console.log("caught the error", error);
// }
// finally {
//     console.log("This message will be executed at last..")
// }
// // task 3
// class customError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "CustomError";

//     }
// };

// try {
//     throw new customError("intentional generated custom error")
// } catch (error) {
//     console.log("Caught the intentional error..", error.message);
// }

// function validateInput() {
//     let input = "";
//     if (input === "")
//         throw new customError("yeh input value vacant nahi rahegah");
// }
// try {
//     validateInput();
// } catch (error) {
//     console.log(error.message);
// }

// task 4

// randomPromise = new Promise((resolve, reject) => {
//     reject("yeh toh reject hogaya");
// });

// randomPromise.catch((error) => {
//     console.log("Caught error!", error);
// });

// async function handleError() {
//     randomPromise = new Promise((resolve, reject) => {
//         reject("yeh toh reject hogaya");
//     });

//     try {
//         let rejected_message = await randomPromise;
//         console.log(rejected_message);
//     } catch (error) {
//         console.log("caught error",error);
//     }
// }
// handleError();

// task 5

// fetch("https://someapi.com/api/endpoint")
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Network response wasn't okay");
//         }
//         response.json();
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.log("Coudnt fetch the data", error))

// async function getResource() {

//     const url = "https://somepai.com/api/endpoint";
//     try {
//         const response = await fetch(url);
//         const json = await response.json();
//         console.log(json);
//     } catch (error) {
//         console.log("something went wrong");
//     }
// }

// getResource();