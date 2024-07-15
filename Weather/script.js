const apiKey = "4b95b7684dd3224b2628e7c13c4ec80f";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiURL + city + `&units=metric&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        document.querySelector('.City').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src="assets/clouds.png"
        }else if(data.weather[0].main == "Clouds"){
            weatherIcon.src="assets/clouds.png"
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src="assets/clear.png"
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src="assets/rain.png"
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src="assets/drizzle.png"
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src="assets/mist.png"
        }

        document. querySelector(".weather").style.display = "block";


    } catch (error) {
        console.error("Error fetching the weather data:", error);
        alert("Error fetching the weather data: " + error.message);
    }
}

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
