//task1

let array = [1, 2, 3, 4, 5];
console.log(array);
console.log(array[0], array[array.length - 1]);

//task2
array.push(6);
console.log(array);
array.pop();
console.log(array);
array.shift();
console.log(array);
array.unshift(13);
console.log(array);

//task 3
let array1 = [1, 2, 3, 4, 5];

array1 = array1.map((count) => {
    return count * count;
})
console.log(array1);

let new_array = [1, 2, 3, 4, 5, 6, 12, 13];
new_array = new_array.filter((num) => num % 2 == 0);
console.log(new_array);
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, currentVal) => acc + currentVal, 0);
console.log(sum);

//task 4
for (value in numbers) {
    console.log(numbers[value]);
}
numbers.forEach((num) => {
    console.log(num);
});

//task 5
let twoD = [[1, 2, 3], [4, 5, 6]];

console.log(twoD);
console.log(twoD[0][2]);

