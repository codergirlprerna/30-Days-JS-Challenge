const apiKey = "a8c58f7262d7591c7a79e1d990bcad46";

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;


    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            console.log("Weather Data: ", data);
            document.getElementById('city').textContent = data.name;
            document.getElementById('temperature').textContent = data.main.temp;
            document.getElementById('condition').textContent = data.weather[0].description;
        })
        .catch(error => {
            console.log("Error fetching data:", error);
            alert("Couldn't fetch weather data. Please try again.");
        });

    fetch(forecastUrl)
    .then(response => response.json())
    .then(forecastData => {
        console.log("Forecast Data: ", forecastData);
        displayForecast(forecastData);
    })
    .catch(error => console.log("Error fetching forecast:", error));

}
function displayForecast(data) {
    const forecastContainer = document.getElementById("forecast");
    forecastContainer.innerHTML = ""; 

    const dailyForecast = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    dailyForecast.forEach(day => {
        const date = new Date(day.dt_txt).toLocaleDateString();
        const temp = day.main.temp;
        const condition = day.weather[0].description;
        const icon = day.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;


        const forecastItem = document.createElement("div");
        forecastItem.classList.add("forecast-item");
        forecastItem.innerHTML = `
            <p><strong>${date}</strong></p>
            <p>${temp}°C, ${condition}</p>
            <img src="${iconUrl}" alt="${condition}">

        `;
        forecastContainer.appendChild(forecastItem);

    });
}
