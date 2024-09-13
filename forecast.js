
const forecasts = document.getElementById("forecasts");
const forecastURL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Argentina&days=1&aqi=no&alerts=no&lang=es`;
const forescastDay = 0

function getForecast() {
    fetch(forecastURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const forecast = data.forecast.forecastday[0].hour;
            console.log(forecast);})
        .catch((error) => console.log(error))
}