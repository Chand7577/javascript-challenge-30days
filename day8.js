// //task 1
// let name_="Amrit";
// let age=22;
// let info=`My name is ${name_} and i'm ${age} years old`;
// console.log(info);

// let multiLine=`i feel so bored .
// and i dont understand why ${name_}`
// console.log(multiLine)

//task2
let array = ["red", "green", "blue"];
[color1, color2] = array;
console.log(color1)
console.log(color2);

let book = {
    title: "The Famous Five",
    author: "Enid Blyton"
};
let { title: bookKaTitle, author: bookKaAuthor } = book
console.log(bookKaAuthor);
console.log(bookKaTitle);

// task3
// let array1 = [1, 2, 3]
// let array2 = [4, 5, 6]
// const new_array = [...array1, ...array2]
// console.log(new_array)

// sum = (...numbers)=>{
//     return numbers.reduce((acc, value) => acc + value, 0)
// }
// console.log(sum(1, 2, 3))

//task 4
let product = (num1, num2 = 1) => {
    return num1 * num2;
}
console.log(product(3));
console.log(product(3, 4));

//task 5
let student_name = "Amrit";
let student_age = 22;
let sex = "male";
const Student = {
    student_name, student_age, sex,
    getGender() {
        console.log(this.sex);
    }

};
console.log(Student);
Student.getGender();
// computed prop name
const person_name = "name";

const Person = {
    [person_name]: "Amrit"

}
console.log(Person)