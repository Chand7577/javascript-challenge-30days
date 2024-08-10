// task1

// class Node {

//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// function reverse(l1) {

//     let prev = null;
//     let current = l1;
//     let temp = null;
//     while (current) {
//         temp = current.next;
//         current.next = prev;
//         prev = current;
//         current = temp;
//     }
//     return prev;

// }

// function addTwoSums(l1, l2) {

//     let dummyNode = new Node(0);
//     let temp = dummyNode;
//     let carry = 0;



//     while (l1 != null || l2 != null || carry) {
//         let sum=0;
//         if (l1 != null) {
//             sum += l1.data;
//             l1 = l1.next;
//         }
//         if (l2 != null) {
//             sum += l2.data;
//             l2 = l2.next;
//         }
//         sum += carry;

//         carry = Math.floor(sum / 10);
//         let node = new Node(sum % 10);
//         temp.next = node;
//         temp = temp.next;
//     }
//     return dummyNode.next;
// }

// let l1 = new Node(2);
// l1.next = new Node(4);
// l1.next.next = new Node(3);
// let l2 = new Node(5);
// l2.next = new Node(6);
// l2.next.next = new Node(4);

// let pointer = addTwoSums(l1, l2);

// while (pointer != null) {
//     console.log(pointer.data);
//     pointer = pointer.next;
// }

// task 2

// function longestSubstring(string) {

//     let max = 0;
//     let hash = {};
//     for (let i = 0; i < string.length; i++) {
//         for (let j = i+1; j < string.length; j++) {
//             if (hash[string[j]]) break;

//             hash[string[j]] = true;
//             let length = j - i + 1;
//             max = Math.max(max, length);

//         }

//     }
//     return max;
// }
// console.log(longestSubstring("abcabcbb"));


// task 3 Container with most
// function amountOfWater(arr, i, j) {
//     let maxAmount=0;
//     let water=0;
//     while (i != j) {

//         if(arr[i]<arr[j]){
//             water=(j-i)*arr[i];
//             i++;
//         }
//         else{
//             water=(j-i)*arr[j];
//             j--;
//         }

//         maxAmount=Math.max(water,maxAmount);

//     }
//     return maxAmount;


// }
// console.log(amountOfWater([3,1,2,4,5],0,4));

// task 4




// function threeS(arr) {

//     let result = [];
//     arr.sort();


//     for (let i = 0; i < arr.length; i++) {
//         if (i > 0 && arr[i] == arr[i - 1])
//             continue;


//         let left = i+1;
//         let right = arr.length - 1;

//         while (left < right) {
//             let threeSum = arr[i] + arr[left] + arr[right];

//             if (threeSum > 0) {
//                 right--;
//             }
//             else if (threeSum < 0) {
//                 left++;
//             }
//             else {
//                 result.push([arr[i], arr[left], arr[right]]);
//                 left++;

//                 while (arr[left] == arr[left - 1] && left < right) {
//                     left++;
//                 }
//             }

//         }
//     }
//     return result;

// }

// console.log(threeS([-1,0,1,2,-1,-4]));




// task 5
// function groupAnagrams(string) {


//     if (string.length == 0) {
//         return [[""]];
//     }
//     const hashMap = new Map();

//     for (let word of string) {
//         const sortedWord = word.split("").sort().join("");

//         if (hashMap.has(sortedWord))
//             hashMap.get(sortedWord).push(word);
//         else
//             hashMap.set(sortedWord, [word]);


//     }
//     const result=[];

//     for( let collection of hashMap.values()){
//         result.push(collection);
//     }
//     return result;

// }

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));