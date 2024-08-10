// task 1






// class Node {
//     constructor(data, next) {
//         this.data = data;
//         this.next = null;
//     }

// }

// function addNodeEnd(head, value) {
// //     let tail;
// //     let newNode = new Node(value);
// //     tail = head;

// //     if (head == null) {

// //         return head = newNode
// //     }

// //     while (tail.next != null) {
// //         tail = tail.next;
// //     }

// //     tail.next = newNode

// //     return head;
// // }

// function displayNodes(head) {
//     let current = head;

//     if (current == null) {
//         console.log("zero nodes....");
//     }
//     while (current != null) {
//         console.log(current.data);
//         current = current.next;
//     }


// }
// function removeLast(head) {
//     let current = head;
//     while (current.next.next != null) {
//         current = current.next;
//     }

//     current.next = null;
// }


// let node1 = new Node(1);
// let head = addNodeEnd(node1, 2);
// head = addNodeEnd(head, 3);
// head = addNodeEnd(head, 4);

// removeLast(head);
// displayNodes(head);
// head=addNodeEnd(head,7);
// displayNodes(head);



// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }


// }



// class linkedList {
//     constructor(head) {
//         this.head = null;
//     }


//     addNodeEnd = (head, value) => {
//         let tail;
//         let newNode = new Node(value);
//         tail = head;

//         if (head == null) {

//             return head = newNode
//         }

//         while (tail.next != null) {
//             tail = tail.next;
//         }

//         tail.next = newNode

//     }
//     removeLast = (head) => {
//         let current = head;
//         while (current.next.next != null) {
//             current = current.next;
//         }

//         current.next = null;
//     }
//     displayNodes = (head) => {
//         let current = head;

//         if (current == null) {
//             console.log("zero nodes....");
//         }
//         while (current != null) {
//             process.stdout.write(`${current.data}->`);
//             current = current.next;
//         }



//     }

// }
// let createList = new linkedList();
// createList.head = new Node(1);
// createList.addNodeEnd(createList.head, 2);
// createList.addNodeEnd(createList.head, 3);
// createList.addNodeEnd(createList.head, 5);
// createList.removeLast(createList.head);
// createList.displayNodes(createList.head);


// task 2

// class Stack {
//     constructor(size) {
//         this.top = 0;
//         this.array = [];
//         this.size = size;
//     }


//     peek = () => {
//         console.log(this.array[this.top - 1]);
//     }


//     push = (value) => {
//         if (this.top == this.size)
//             console.log("stack full hogayah");

//         else {
//             this.array.push(value);
//             this.top++;
//         }
//     }
//     pop = () => {
//         if (this.peek() == -1)
//             console.log("stack is empty");

//         else {
//             this.top--;
//             let popped_element = this.array[this.top];

//             return popped_element;


//         }
//     }


// }

// let myStack = new Stack(5);
// let string = "amrit";
// for (let i = 0; i < string.length; i++) {
//     myStack.push(string[i]);

// }


// let reverseWord = "";
// for (let i = 0; i < string.length; i++) {
//     reverseWord += myStack.pop();
// }
// console.log(reverseWord)
// // task 3
// class Queue {

//     constructor() {
//         this.array = [];
//         this.frontIndex = 0;
//         this.rear = -1;
//     }


//     enqueue = (element) => {

//         this.rear++;
//         this.array[this.rear] = element;
//     }

//     front = () => {
//         return this.array[this.frontIndex];
//     }

//     dequeue = () => {
//         let element_popped = this.array[this.frontIndex];
//         delete this.array[this.frontIndex];
//         this.frontIndex++;
//         return element_popped;
//     }

// }

// let myQueue = new Queue();


// for (let i = 0; i < 5; i++) {
//     myQueue.enqueue(`process ${i + 1}`);
// }


// function printJobs() {
//     for (let i = 0; i < 5; i++) {
//         let job = myQueue.dequeue();
//         console.log(job);
//     }
// }
// printJobs()

// task 4
// class TreeNode {
//     constructor(data,left = null, right = null) {
//         this.data = data;
//         this.right = right;
//         this.left = left

//     }


// }

// let root=new TreeNode(2);
// root.left=new TreeNode(3);
// root.right=new TreeNode(4);

// class BinaryTree {

//     constructor(right = null, left = null) {
//         this.right = right;
//         this.left = left;
//     }

//     addData = (data) => {
//         this.data = data;
//     }

//     inorder = (root) => {
//         if (root == null)
//             return;

//         this.inorder(root.left);
//         console.log(root.data);
//         this.inorder(root.right);
//     }
// }
// let root = new BinaryTree();
// let rightChild = new BinaryTree();
// let leftChild = new BinaryTree();
// rightChild.addData(3);
// root.addData(2);
// leftChild.addData(4);
// root.right=rightChild;
// root.left=leftChild;
// root.inorder(root);



