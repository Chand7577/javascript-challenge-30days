//task1

function oddEven(num) {
    return num % 2 == 0 ? "even" : "odd"

}

function square(num) {
    return num * num;
}

//task 2

function maxOfTwo(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

function conCat(string1, string2) {
    return string1 + string2;
}
// task 3
sum = (num1, num2) => {
    return num1 + num2;
}
let string1 = "Amrit";

check = (character) => {
    for (value in string1) {
        if (character == string1[value]) {
            return true;
        }
        else return false;
    }
}


//task 4
function product(num1, num2 = 3) {
    return num1 * num2;
}

function greet(name, age = 21) {
    console.log(`hi ${name},tera age hain ${age}`);
}
//task 5

function say_hello() {
    console.log("Hello,world");
}

function callNTimes(n, callback) {
    for (i = 0; i < n; i++)
        callback();

}

unknown = (callback1, callback2, num) => {
    let result = callback1(num);
    console.log(callback2(result));

}

