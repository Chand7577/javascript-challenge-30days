// // task 1
// class Person {

//     constructor(name, age) {
//         this.name = name
//         this.age = age

//     }

//     static genericGreet() {
//         console.log("This a generic message everyone......");
//     }


//     greet = () => {
//         console.log(`Hello ${this.name}`);
//     }

//     updateAge = (age) => {
//         this.age = age
//     }

//     getAge = () => {
//         console.log(this.age);
//     }

//     getFullName = () => {
//             console.log(this.name,this.last)
//     }

//     setLastName=(last)=>{
//         this.last=last;
//     }
//     setFullName=(name,last)=>{
//         this.name=name;
//         this.last=last;

//     }

// }

// // let person1 = new Person("Amrit", 22);
// // person1.greet();
// // person1.getAge();
// // person1.updateAge(23);
// // person1.getAge();


// // task 2

// class Student extends Person {

//     static count = 0;
//     constructor(name, age, id) {

//         super(name, age);
//         this.id = id;
//         Student.count++;
//     }

//     static getTotalStudents() {
//         console.log(Student.count);
//     }

//     getStudentId = () => {
//         console.log(this.id);
//     }
//     greet = () => {
//         console.log(`student id is ${this.id}`)
//     }
// }
// let student1 = new Student("Amrit", 22, 3113);
// let student2 = new Student("Mr-Robot", 23, 3114)
// student1.greet();

// // task 3 static keyword
// Student.genericGreet();
// Student.getTotalStudents();


// // task 4 getter setters
// student1.setLastName("Chand")
// student1.setFullName("Goldi","Bhai")
// student1.getFullName();
// task 5(optional)

// class Account{

//     constructor(balance){
//         this.balance=balance;
//     }

//     deposit=(addmoney)=>{
//         this.balance+=addmoney;
//     }

//     withdraw=(amount)=>{
//         this.balance-=amount;
//         console.log("here is your withdrawn amount",amount);
//         console.log("Balance left",this.balance);
//     }


// }
// let NewAccount=new Account(5000);
// NewAccount.deposit(1000)
// NewAccount.withdraw(200);