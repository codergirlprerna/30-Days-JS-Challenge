const apiKey = "a8c58f7262d7591c7a79e1d990bcad46";

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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
}
