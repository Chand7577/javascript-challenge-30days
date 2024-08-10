// task 1





// function checkTwoSum(arr, target) {
//     let left = 0;
//     let right = arr.length;
//     while (left < right) {

//         if (arr[left] + arr[right] == target) {
//             return 1;
//         }
//         else if (arr[left] + arr[right] > target) {
//             right--;
//         }
//         else {
//             left++;
//         }
//     }
//     return 0;
// }


// console.log(checkTwoSum([2,7,11,15],9));


// task 2

// function reverseInteger(num) {

//     if (num < 0) {
//         return -reverseInteger(-num);
//     }
//     if (num % 10 == 0) {
//         let numString = num.toString();

//         let reverse = numString.split("").reverse().join("");
//         return parseInt(reverse);
//     }




//     let reverse = 0


//     while (num != 0) {

//         reverse = reverse * 10 + num % 10;
//         num = Math.floor(num / 10);
//     }
//     return reverse;

// }

// console.log(reverseInteger(-234));

// task 3
// function checkPalidrome(num) {

//     return num==reverseInteger(num) ? true :false;

// }
// console.log(checkPalidrome(-232));

// task 4

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// function mergeSortedLinkedList(first, second) {
//     let arr = [];

//     while (first != null) {
//         arr.push(first.data);
//         first = first.next;
//     }

//     while (second != null) {
//         arr.push(second.data);
//         second = second.next;
//     }
//     bubbleSort(arr);
//     let head = new Node(arr[0]);
//     let tail = head;

//     for (let i = 1; i < arr.length; i++) {
//         tail.next = new Node(arr[i]);
//         tail = tail.next;
//     }
//     return head;
// }


// // first linkedlist
// let first = new Node(2);
// first.next = new Node(4);
// first.next.next = new Node(8);
// first.next.next.next = new Node(9);

// // second linkedlist
// let second = new Node(1);
// second.next = new Node(3);
// second.next.next = new Node(8);
// second.next.next.next = new Node(10);
// let temp = mergeSortedLinkedList(first, second);

// while (temp != null) {
//     console.log(temp.data);
//     temp = temp.next;
// }


// // task 5

// let string = "()[{}()]";
// let string2="[()";
// function checkValidParenthesis(string) {
//     let stack = [];
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == "(")
//             stack.push(")");

//         else if (string[i] == "{")
//             stack.push("}");


//         else if (string[i] == "[")
//             stack.push("]");

//         else if(stack.length==0 || stack.pop()!=string[i])
//             return false;
//     }
//     return stack.length==0;




// }
// console.log(checkValidParenthesis(string2));