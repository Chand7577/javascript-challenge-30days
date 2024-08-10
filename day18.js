// task 1



// let array = [5, 4, 3, 2, 1]
// let size = array.length;
// let new_array = [13, 46, 24, 52, 20, 9];
// let new_size = new_array.length;

// function bubbleSort(arr, size) {


//     for (let i = 0; i < size - 1; i++) {

//         for (let j = 0; j < size - i - 1; j++) {

//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }

//     return arr;
// }

// const new_array = bubbleSort(array, size);
// console.log(new_array);

// function selectonSort(arr, size) {

//     for (let i = 0; i < size - 1; i++) {
//         let largest = arr[i];
//         for (let j = i + 1; j <= size - 1; j++) {

//             if (largest > arr[j]) {
//                 let temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;

//             }



//         }

//     }
//     return arr;
// }
// const arr=selectonSort(new_array, new_size);
// console.log(arr);

// let arr = [13, 46, 24, 52, 20, 9];

// function partition(arr, low, high) {

//     let pivot = arr[low];
//     let i = low;
//     let j = high;
//     while (i < j) {

//         while (arr[i] <= pivot && i <= high) {
//             i++;
//         }

//         while (arr[j] > pivot && j >= low) {
//             j--;
//         }

//         if (i < j) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }


//     }
//     let temp = arr[low];
//     arr[low] = arr[j];
//     arr[j] = temp;
//     return j;


// }




// function quickSort(arr, low, high) {

//     if (low < high) {

//         let p = partition(arr, low, high);

//         quickSort(arr, low, p - 1);
//         quickSort(arr, p + 1, high);

//     }






// }

// quickSort(arr, 0, arr.length - 1);
// console.log(arr);



// task 2


// function linearSearch(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==target)
//             return i;
//     }
// }
// console.log(linearSearch(arr,7))

// let arr = [1,2,3,4,5,6,7];
// let size = arr.length;
// function Binarysearch(arr, target, low, high) {

//     while (low <= high) {
//         let mid = low + Math.floor((high - low) / 2);
//         console.log(mid)


//         if (arr[mid] == target) {
//             return mid;
//         }
//         if (arr[mid] > target) {
//             high = mid - 1;
//         }

//         else { low = mid + 1 }
//     }
//     return -1;
// }

// console.log(Binarysearch(arr, 7, 0, size - 1));

// task 3

// function countOccurencesOfEach(string) {
//     let occurences = {};

//     for (let i = 0; i < string.length; i++) {
//         let char=string.charAt(i);

//         if(!occurences[char])
//             occurences[char]=1;

//         else
//         occurences[char]+=1;
//     }
//     return occurences;
// }

// console.log(countOccurencesOfEach("AAMRIT"));


// substring

// function subString(string) {

//     let max = 0;
//     for (let i = 0; i < string.length; i++) {

//         let hash ={};

//         for (let j = 0; j < string.length; j++) {
//             if (hash[string[j]]) {break;}


//             hash[string[j]]=true;
//             let len = j - i + 1;
//             max = Math.max(len, max);



//         }


//     }
//     return max;


// }

// console.log(subString("cadbzabcd"))




// task 4

// let array = [1, 2, 3, 4];


// function rotate(arr, k) {


//     for(let i=0;i<k;i++){
//          let last = arr[arr.length - 1];

//         for( let j=arr.length-1;j>0;j--){
//             arr[j]=arr[j-1];
//         }

//         arr[0]=last;
//     }
//     return arr;
// }

// let arr = rotate(array, 2);
// console.log(arr)


// let arr1 = [2, 3, 4];
// let arr2 = [5, 6, 7,8];

// function merge(arr1, arr2, size1, size2) {
//     let arr3 = [];
//     let i = 0;
//     let j = 0;
//     while (i < size1 && j < size2) {

//         if (arr1[i] < arr2[j]) {
//             arr3.push(arr1[i]);
//             i++;
//         }
//         else {
//             arr3.push(arr2[j]);
//             j++;
//         }


//     }
//     for (let m = i; m < size1; m++)
//         arr3.push(arr1[m]);

//     for (let n = j; n < size2; n++)
//         arr3.push(arr2[n]);
//     return arr3;

// }
// console.log(merge(arr1, arr2, arr1.length, arr2.length))