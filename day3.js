// task1

let num = 1;

if (num > 0) {
    console.log("+ve");
}
else if (num < 0) {
    console.log("-ve");
}
else {
    console.log(0);
}

let age = 17
let result = age >= 18 ? "eligible" : "not eligible";
console.log(result);

//task2
let num1 = 2;
let num2 = 5;
let num3 = 7;

if (num1 > num2 && num1 > num3) console.log(num1)
else if (num2 > num1 && num2 > num3) console.log(num2)
else console.log(num3);


//task 3

let day = 2;

switch (day) {
    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;

}
let score = 70;

switch (Math.floor(score / 10)) {
    case 9:
        console.log("A");
        break;

    case 8:
        console.log("B");
        break;

    case 7:
        console.log("C");
        break;
    case 6:
        console.log("D");
        break;

    default:
        console.log("F");
        break;

}
//task 4
let random_num = 3;

console.log(random_num % 2 == 0 ? "even" : "odd");


//task 5
let year = 2020;
if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(true);
} else {

    console.log(false);
}