const API_key = "8351215397566528a275d91b63346e47";
// const lat = "19.8762";
// const lon = "75.3433";

const inpt = document.querySelector("#inpt");
const searchBtn = document.querySelector("#search-btn");

const currentTemp = document.querySelector("#currentTemp");
const currentCity = document.querySelector("#currentCity");
const weatherInfo = document.querySelector("#weather-info");
const currentWeather = document.querySelector("#currentWeather");
let count = 0;

// async function getResource() {

//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`);
//         const data = await response.json();
//         let weatherCondition = data.weather[0].description;
//         let currentTempd = Math.floor((data.main.temp_min - 273.15));
//         let cityNamed = data.name;
//         let span1 = document.createElement("span");
//         let span2 = document.createElement("span");
//         let span3 = document.createElement("span");
//         span1.textContent = weatherCondition;
//         currentWeather.append(span1);
//         span2.textContent = `${currentTempd}°C`;
//         currentTemp.append(span2);
//         span3.textContent = cityNamed;
//         currentCity.append(span3);



//     }
//     catch (error) {
//         console.log("something went wrong", error);
//     }
// }

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const cityName = inpt.value;


    if (count > 0) {

        let span1 = document.querySelector("#weather");
        let span2 = document.querySelector("#temp");
        let span3 = document.querySelector("#city");
        currentWeather.removeChild(span1);
        currentTemp.removeChild(span2);
        currentCity.removeChild(span3);
    }
    // for table
    if (count > 0) {

        weatherInfo.removeChild(weatherInfo.lastElementChild);
        weatherInfo.removeChild(weatherInfo.lastElementChild);
    }
    count++;
    inpt.value = "";

    getData();
    getFiveDay();



    async function getData() {

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`);
            const data = await response.json();
            let weatherCondition = data.weather[0].description;
            let currentTempd = Math.floor((data.main.temp_min - 273.15));
            let cityNamed = data.name;
            let span1 = document.createElement("span");
            let span2 = document.createElement("span");
            let span3 = document.createElement("span");
            span1.textContent = weatherCondition;
            span1.setAttribute("id", "weather");
            currentWeather.append(span1);
            span2.textContent = `${currentTempd}°C`;
            span2.setAttribute("id", "temp");
            currentTemp.append(span2);
            span3.textContent = cityNamed;
            span3.setAttribute("id", "city");
            currentCity.append(span3);



        }
        catch (error) {
            console.log("somthing went wrong", error);
        }
    }
    async function getFiveDay() {



        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_key}`);
            const data = await response.json();

            let dataForNextFiveDays = [];
            for (let i = 0; i < 5; i++) {
                dataForNextFiveDays.push(data.list[i].weather[0].description);
                dataForNextFiveDays.push(Math.floor(data.list[i].main.temp_min - 273.15));
            }
            let h3 = document.createElement("h3");
            h3.textContent = "Weather forecast for next five days";
            weatherInfo.appendChild(h3);
            let table = document.createElement("table");
            let row1 = document.createElement("tr");
            let row2 = document.createElement("tr");
            let row3 = document.createElement("tr");
            let row4 = document.createElement("tr");
            let row5 = document.createElement("tr");
            let row6 = document.createElement("tr");

            let headerCell1 = document.createElement("th");
            let headerCell2 = document.createElement("th");
            headerCell1.innerHTML = "Weather";
            headerCell2.innerHTML = "Temperature";

            row1.appendChild(headerCell1);
            row1.appendChild(headerCell2);

            let data1 = document.createElement("td");
            let data2 = document.createElement("td");
            data1.innerHTML = dataForNextFiveDays[0];
            data2.innerHTML = dataForNextFiveDays[1];

            let data3 = document.createElement("td");
            let data4 = document.createElement("td");
            data3.innerHTML = dataForNextFiveDays[2];
            data4.innerHTML = dataForNextFiveDays[3];

            let data5 = document.createElement("td");
            let data6 = document.createElement("td");
            data5.innerHTML = dataForNextFiveDays[4];
            data6.innerHTML = dataForNextFiveDays[5];

            let data7 = document.createElement("td");
            let data8 = document.createElement("td");
            data7.innerHTML = dataForNextFiveDays[6];
            data8.innerHTML = dataForNextFiveDays[7];
            let data9 = document.createElement("td");
            let data10 = document.createElement("td");
            data9.innerHTML = dataForNextFiveDays[8];
            data10.innerHTML = dataForNextFiveDays[9];
            row2.appendChild(data1);
            row2.appendChild(data2);
            row3.appendChild(data3);
            row3.appendChild(data4);
            row4.appendChild(data5);
            row4.appendChild(data6);
            row5.appendChild(data7)
            row5.appendChild(data8);
            row6.appendChild(data9);
            row6.appendChild(data10);
            table.appendChild(row1);
            table.appendChild(row2);
            table.appendChild(row3);
            table.appendChild(row4);
            table.appendChild(row5);
            table.appendChild(row6);
            table.setAttribute("class", "table-util");
            weatherInfo.appendChild(table);
            dataForNextFiveDays.sort();
            let trTags = document.getElementsByTagName("tr");
            let hashmap = {
                "broken clouds": "broken.jpg",
                "light rain": "light-rain.png",
                "moderate rain": "moderate-rain.png",
                "overcast clouds": "overcast-cloud.png"
            };
            for (let i = 1; i < trTags.length; i++) {
                let src = hashmap[trTags[i].childNodes[0].textContent];
                let new_img=document.createElement("img");
                new_img.width=40;
                trTags[i].childNodes[0].textContent="";
                new_img.setAttribute("src",`./${src}`);
                trTags[i].childNodes[0].appendChild(new_img);
            }

        }
        catch (error) {
            console.log("somthing went wrong", error);
        }

    }


});

