// task1

let book = {
    title: "The Famous Five",
    author: "Enid Blyton",
    year: 1997,
    info: function () {
        return this.title + " by " + this.year;

    },
    updateYear: function (year) {
        this.year = year;
    },
    library: {
        name: "some lib",
        books: ["sherlock", "mazerunner"]
    },
    without_thisInfo: function () {
        return book.title + " by " + book.author;
    }


}
// console.log(book);
// console.log(book.title);
// console.log(book.author)

// // task2
// console.log(book.info());
// book.updateYear(2021);
// console.log(book);

// //task 3
// console.log(book.library);
// console.log(book.library.books);
// //task4
// console.log(book.without_thisInfo());
// //task 5

// for (key in book) {
//     if (typeof book[key] !== "function") {
//         console.log(key + ": " + book[key]);
//     }
// }


console.log(Object.keys(book));
console.log(Object.values(book));
