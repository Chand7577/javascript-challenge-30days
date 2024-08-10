// // task 1
// let isSleepy = false;
// const promise1 = new Promise((resolve, reject) => {
//     if (isSleepy)
//         resolve("promise has been resolved");

//     else reject("something went wrong")
// });


// promise1.then((message) => {
//     setTimeout(() => {
//         console.log(message);
//     }, 2000);
// })
//     .catch((error) => {
//         setTimeout(() => {
//             console.log(error);
//         }, 2000);
//     })


// task 2

// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ userId: 1, username: "programmer" });
//         }, 1000);
//     });
// }

// function fetchPosts(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 { id: 1, title: "post1" },
//                 { id: 2, title: "post2" }
//             ], 1500);
//         });
//     })
// }

// function fetchComments(postId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 { id: 1, text: "comment1" },
//                 { id: 2, text: "comment2" }
//             ])
//         }, 2000);
//     });
// }

// // chaining promises
// fetchUserData()
//     .then((user) => {
//         console.log(`Fetched User data:${user.username}`);
//         return fetchPosts(user.userId);
//     })
//     .then((posts) => {
//         console.log(posts.length);
//         console.log(posts[0].id);
//         return fetchComments(posts[0].id);
//     })
//     .then((comments) => {
//         console.log(comments[0].id);
// })

// task 3

// async function getUsers() {
//     let promise = new Promise((resolve, reject) => {
//         resolve([
//             { userId: 1, userName: "xyz" },
//             { userId: 2, userName: "sososoname" }
//         ])
//     })
//     let users = await promise;
//     console.log(users);
// }

// getUsers();


// async function rejectState(promise) {

//     try {
//         const result = await promise;
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }


// let promise = new Promise((reject, resolve) => {
//     reject("Something went wrong");
// });

// rejectState(promise);

// task 4

// let promise = fetch("https://dog-api.kinduff.com/api/facts")
// promise
//     .then(response => response.json())
//     .then(json => json.facts)
//     .then(fact => console.log(fact[0]))
//     .catch(error => console.log("kuch toh galat huaah"));



// getFacts = async () => {
//     const response = await fetch("https://dog-api.kinduff.com/api/facts");

//     const FactInJson = await response.json();

//     console.log(FactInJson.facts[0]);

// }
// getFacts();

// task 5
// const promise1 = Promise.resolve(3);
// const promise2 = 2;
// Promise.all([promise1, promise2]).then((values) => {
//     console.log(values);
// });

const promiseA = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "A")
});

const promiseB = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "B");
});

Promise.race([promiseA, promiseB]).then(value => console.log(value));


