const detailContainer = document.querySelector(".container-details");
let title = JSON.parse(localStorage.getItem("Title"));
let Genre = JSON.parse(localStorage.getItem("Genre"));
let rating = JSON.parse(localStorage.getItem("rating"));
let runtime = JSON.parse(localStorage.getItem("runtime"));
let writers = JSON.parse(localStorage.getItem("writers"));
let director = JSON.parse(localStorage.getItem("director"));
let language = JSON.parse(localStorage.getItem("language"));
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");
let p5 = document.createElement("p");
let p6 = document.createElement("p");
let p7 = document.createElement("p");
p1.textContent = title;
p2.textContent = Genre;
p3.textContent = rating;
p4.textContent = runtime;
p5.textContent = writers;
p6.textContent = director;
p7.textContent = language;
detailContainer.appendChild(p1);
detailContainer.appendChild(p2);
detailContainer.appendChild(p3);
detailContainer.appendChild(p4);
detailContainer.appendChild(p5);
detailContainer.appendChild(p6);
detailContainer.appendChild(p7);