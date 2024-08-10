// task 1
// const fact = (n) => {
//     if (n == 1 || n == 0)
//         return 1;


//     return n * fact(n - 1);
// }

// console.log(fact(4));
// console.log(fact(5));
// console.log(fact(6));

// const fib = (n) => {
//     if (n == 0)
//         return 0;

//     if (n == 1)
//         return 1;

//     let value=fib(n - 1) + fib(n - 2);
//     return value;
// }

// console.log(fib(2));
// console.log(fib(3));

// task 2
let array = [1, 2, 3,4,5,6,3];
// function sum(array) {
//     if (array.length==0)
//         return 0;

//     return array[0] + sum(array.slice(1));

// }
// console.log(sum(array));

// function max(array,current){

//     if(current==array.length-1)
//         return array[current];

//     if(array[current]>array[current+1])
//         return array[current];

//     return max(array,current+=1);
// }

// console.log(max(array,0));

// task 3

// function reverseString(String) {
//     if (String === "")
//         return String;

//     return reverseString(String.substr(1)) + String[0];
// }

// console.log(reverseString("Amrit"))

// function checkPalindrome(String) {
//     if (reverseString(String) == String)
//         console.log("Palindrome");

//     else console.log("Not a palindrome");
// }

// checkPalindrome("amrit");

// task 4

// function recursiveBSort(array,low ,high,target){
//      if(high>=low){
//         let mid=Math.floor((low+high)/2);
         
        
//         if(target==array[mid])
//             return mid;

//         if(target<array[mid])
//         return recursiveBSort(array,low,mid-1,target);

    
//     return recursiveBSort(array,mid+1,high,target);

//      }
//      return "couldn't find";
// }

// console.log(recursiveBSort(array,0,5,4));

// let size=array.length;

// function frequency(array,target,size){
//     if(size==0)
//         return 0;

//     if(array[0]==target){
//         array.shift();
//         return 1+frequency(array,target,size-1);
//     }

//     array.shift();
//     return frequency(array,target,size-1);
// }

// console.log(frequency(array,6,size));

