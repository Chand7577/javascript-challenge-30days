const apikey = "bb9cf575";

const searchInput = document.querySelector("#searchTag");
const searchButton = document.querySelector("#search-btn");
const moviesContainer = document.querySelector("#movies-container");


async function getMovieData(movie) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${movie}`);
        const data = await response.json();

        return data;


    } catch (error) {
        console.log("couldn't fetch api ", error);
    }
}

searchButton.addEventListener("click", () => {

    const movieName = searchInput.value;
    const data = getMovieData(movieName);
    moviesContainer.innerHTML = "";
    searchInput.value = "";
    data.then((data) => {
        for (let i = 0; i < 9; i++)
            createMovieCard(data.Search[i]);
    })





});

function createMovieCard(data) {

    const card = document.createElement("div");
    card.setAttribute("class", "movie-card");
    const img = document.createElement("img");
    img.setAttribute("src", data.Poster);
    const description = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = data.Title;
    const h4 = document.createElement("h4");
    h4.textContent = data.Released;

    description.appendChild(h3);
    description.appendChild(h4);
    description.setAttribute("class", "movie-description");
    card.appendChild(img);
    card.appendChild(description);
    const moreInfoBtn = document.createElement("button");

    moreInfoBtn.setAttribute("class", "infoButton");
    moreInfoBtn.textContent = "more info";
    card.appendChild(moreInfoBtn);
    moviesContainer.appendChild(card);





    moreInfoBtn.addEventListener("click", () => {

        let specificMovie = card.children[1].innerText;

        fetch(`http://www.omdbapi.com/?apikey=${apikey}&t=${specificMovie}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                localStorage.setItem("Title", JSON.stringify(data.Title));
                localStorage.setItem("Awards", JSON.stringify(data.Awards));
                localStorage.setItem("Genre", JSON.stringify(data.Genre));
                localStorage.setItem("rating", JSON.stringify(data.imdbID));
                localStorage.setItem("runtime", JSON.stringify(data.Runtime));
                localStorage.setItem("writers", JSON.stringify(data.Writer));
                localStorage.setItem("director", JSON.stringify(data.Director));
                localStorage.setItem("language", JSON.stringify(data.Language));

                let p = document.createElement('p');
                let actors = document.createElement("p");
                p.textContent = data.Plot;
                p.style.fontSize = "15px";
                actors.textContent = `Actors:${data.Actors}`;
                actors.style.fontSize = "19px";
                actors.style.color = "black";
                card.removeChild(moreInfoBtn);
                card.appendChild(p);
                card.appendChild(actors);
                let a = document.createElement("a");
                a.setAttribute("href", "detail.html");
                a.style.color = "white";
                a.textContent = "click here for detailed info";
                card.appendChild(a);


            });






    })


}