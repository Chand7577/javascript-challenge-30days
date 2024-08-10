//task 1

let heading = document.getElementById("heading");
let para = document.getElementsByClassName("para");
let box = document.querySelector("#box");
let button = document.querySelector("button");


heading.textContent = "im feeling bored";
para[0].style.backgroundColor = "red";

// task2
let new_div = document.createElement("div");
new_div.textContent = "This is a div";
document.body.append(new_div);

let ul = document.getElementsByTagName("ul");
let li = document.createElement("li");
li.innerHTML = "About Us";
ul[0].append(li);

// task 3
// heading.style.visibility = "hidden";
// ul[0].lastChild.style.display = "none";

// task 4
// heading.setAttribute("id", "h1kavalue");

let clicked = true;
box.addEventListener("click", () => {
    if (clicked) {
        box.classList.add("addcolor");
        clicked = false
    }
    else {
        box.classList.remove("addcolor");
        clicked = true;
    }
})

// task 5
button.addEventListener("click", () => {
    heading.textContent = "how are you today?";
})
para[0].addEventListener("mouseover", () => {

    para[0].style.border = "3px solid orange";
})






