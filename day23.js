// task 1


// function sol(arr1, arr2) {
//     let arr3 = arr1.concat(arr2);


//     if (arr3.length % 2 == 0) {
//         let val = arr3.length / 2;
//         let middle1 = arr3[val];
//         let middle2 = arr3[val - 1];
//         let ans = (middle1 + middle2) / 2;
//         console.log(ans);
//     }
//     return Math.floor(arr3[Math.floor(arr3.length/2)]);

// }

// console.log(sol([2, 4, 6], [1, 3]));

// task 2

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }
// function mergeK(arr) {

//     for (let list in arr) {
//         arr[list].sort();
//     }

//     let dummy = new Node(0);
//     let tail = dummy;
//     for (let i = 0; i < arr.length; i++) {
//         for( let j=0;j<arr[i].length;j++){
//              let node=new Node(arr[i][j]);
//              tail.next=node;
//              tail=tail.next;
//         }
//     }
//     return dummy.next;
// } 

// let head=mergeK([[1, 4, 5], [1, 3, 4], [2, 6]]);


// task 3

