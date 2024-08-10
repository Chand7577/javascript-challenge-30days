// task 1

let clickMe = document.querySelector("#clickMe");
let para = document.querySelector("p");
let img = document.querySelector("img");
let div = document.querySelector("div");
let input = document.querySelector("input");
let submitBtn = document.querySelector(".btn");
let nameInput = document.getElementById("name");
let ageInput = document.querySelector("#age");
let ul_colors = document.querySelector("#colors");
let listItems = document.querySelector(".listItem");
let addList = document.querySelector('#add');


clickMe.addEventListener("click", () => {
    para.textContent = "Hey! How are you doing today";
})

div.addEventListener("dblclick", () => {
    img.classList.toggle("hidden");
})

// task 2
para.addEventListener('mouseover', () => {
    para.style.backgroundColor = "blue";
});
para.addEventListener("mouseout", () => {
    para.style.backgroundColor = "white";
})

// task 3
input.addEventListener("keydown", () => {
    console.log(input.value);
})
let content = "";
input.addEventListener("keyup", () => {
    para.textContent = input.value;
})
// task 4

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(nameInput.value);
    console.log(ageInput.value);

})
ul_colors.addEventListener("change", () => {
    let chosen_color = ul_colors.value;
    switch (chosen_color) {
        case "red":
            para.textContent = `your chosen color is${chosen_color}`;
            para.style.color = chosen_color;
            break;

        case "yellow":
            para.textContent = `your chosen color is${chosen_color}`;
            para.style.color = chosen_color;
            break;

        case "blue":
            para.textContent = `your chosen color is${chosen_color}`;
            para.style.color = chosen_color;
            break;


        case "orange":
            para.textContent = `your chosen color is${chosen_color}`;
            para.style.color = chosen_color;
            break;
    }
})

// task 5


listItems.addEventListener("click", (event) => {
    console.log(event.target.textContent);

})

addList.addEventListener("click", () => {
    let li = document.createElement('li');
    li.textContent = "bored";
    listItems.append(li);
});