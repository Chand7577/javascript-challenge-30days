// task 1

// localStorage.setItem("name","Amrit");
// console.log(localStorage.getItem("name"));


// const info={
//     name:"Amrit",
//     age:"22",
// }

// const jsonFormat=JSON.stringify(info);

// localStorage.setItem("object",jsonFormat);

// const objectFormat=JSON.parse(localStorage.getItem("object"));
// console.log(objectFormat);

// task 2

// const inptName = document.querySelector("#name");
// const inptEmail = document.querySelector("#email");
// const submit = document.querySelector("#btn");
// const savedData = document.querySelector(".savedData");
// document.addEventListener('DOMContentLoaded', () => {



//     submit.addEventListener("click", () => {

//         const username = inptName.value;
//         const email = inptEmail.value;
//         localStorage.setItem("userData", JSON.stringify({ username, email }));

//     });
//     displayInfo();

// });

// function displayInfo() {
//     const dataObject = JSON.parse(localStorage.getItem("userData"));

//     const p = document.createElement("p");
//     const secondP = document.createElement("p");
//     p.textContent = dataObject.username;
//     secondP.textContent = dataObject.email;
//     savedData.append(p);
//     savedData.append(secondP);
// }
// console.log(localStorage.getItem("userData"));
// localStorage.removeItem("userData");
// console.log(localStorage.getItem("userData"));

// task 3

// let data="password";
// sessionStorage.setItem("userpassword",data);
// console.log(sessionStorage.getItem("userpassword"))

// sessionStorage.setItem("dataObject",JSON.stringify({username:"amrit",email:"xy@gmail.com"}));
// const jsObject=JSON.parse(sessionStorage.getItem("dataObject"));
// console.log(jsObject.username);

// task 4
// document.addEventListener('DOMContentLoaded', () => {



//     submit.addEventListener("click", (e) => {
//         e.preventDefault();
//         const username = inptName.value;
//         const email = inptEmail.value;
//         sessionStorage.setItem("userData", JSON.stringify({ username, email }));

//     });
//     displayInfo();


// });

// function displayInfo() {
//     const dataObject = JSON.parse(sessionStorage.getItem("userData"));

//     const p = document.createElement("p");
//     const secondP = document.createElement("p");
//     p.textContent = dataObject.username;
//     secondP.textContent = dataObject.email;
//     savedData.append(p);
//     savedData.append(secondP);
// }

// console.log(sessionStorage.username);
// sessionStorage.clear();



// task 5

// function saveToLocalAndSession() {


//     const key = prompt("Enter key betah");
//     const value = prompt("Enter value betah");
//     localStorage.setItem(key, value);
//     sessionStorage.setItem(key, value);





//     console.log(localStorage.getItem(key));
//     console.log("fetched from local");



//     console.log(sessionStorage.getItem(key));
//     console.log("fetched from session");

// }

// saveToLocalAndSession();


// function clearBothStorage(){
//     sessionStorage.clear();
//     localStorage.clear();
// }

// clearBothStorage();