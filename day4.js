// task1

for (let i = 1; i < 11; i++)
    console.log(i);

for (let i = 1; i < 11; i++)
    console.log(5 * i);

//task2

let counter = 1;
let result = 0;
while (counter <= 10) {
    result += counter;
    counter++;
}

console.log(result);

let iterable = 10;

while (iterable > 0) {
    console.log(iterable);
    iterable--;
}

//task 3
let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5);


let number = 1;
let input = 6;
let fact = 1;

do {
    fact *= number;
    number++;
} while (number <= input);

console.log(fact);

//task 4

for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write("*");
    } console.log("\n");

}


//task 5
for (let i = 1; i <= 10; i++) {
    if (i == 5)
        continue;
    else
        console.log(i);
}
for (let i = 1; i <= 10; i++) {
    if (i == 7)
        break;
    else
        console.log(i);
}