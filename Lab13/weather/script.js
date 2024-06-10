const API_KEY = "f41040c72dcb5add9c1896918848efa7";

const weatherSearchForm = document.querySelector(".weather-search-container");
const weatherSearchInput = document.getElementById("search-input");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity-percent");
const wind = document.querySelector(".wind-percent");
const image = document.querySelector(".weather-img");
const weatherContainer = document.querySelector(".weather-container");

weatherSearchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = weatherSearchInput.value;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    try {
        const apiDatas = await getDatas(API_URL);
        updateCard(apiDatas);
    } catch (error) {}
});

async function getDatas(API_URL) {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}

function updateCard(data) {
    if (data.cod != 404) {
        description.textContent = data?.weather[0].main;
        humidity.textContent = `${data?.main.humidity}%`;
        wind.textContent = `${parseInt(data?.wind.speed)}Km/h`;
        temperature.innerHTML = `${
            parseInt(data?.main.temp) - 273
        }<span>°C</span>`;
        updateImage(data);
        if (weatherContainer.classList.contains("error")) {
            weatherContainer.classList.remove("error");
        }
    } else {
        weatherContainer.classList.add("error");
    }
}

function updateImage(data) {
    switch (data?.weather[0].main) {
        case "Clear":
            image.src = "assets/clear.png";
            break;
        case "Rain":
            image.src = "assers/rain.png";
        case "Snow":
            image.src = "assers/snow.png";
        case "Clouds":
            image.src = "assers/cloud.png";
        case "Mist":
            image.src = "assers/mist.png";
        case "Haze":
            image.src = "assers/haze.png";
        default:
            image.src = "assets/cloud.png";
            break;
    }
}
