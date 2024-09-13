const API_KEY = "0f521e6e005e4bffbb1181516240809";
const form = document.querySelector("#weatherForm");
let weatherURL = ``;
const resumeDescription = document.querySelector(".weather-description")
const resumeIcon = document.querySelector(".weather-icon")
const resumeTemp = document.querySelector(".weather-temp")
const cityTime = document.querySelector(".weather-time")
const cityLocation = document.querySelector(".weather-location")
const feelsLike = document.querySelector(".feels-like")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")
const pressure = document.querySelector(".pressure")
const visibility = document.querySelector(".visibility")
const clouds = document.querySelector(".clouds")
const uv = document.querySelector(".uv")
const windDirection = document.querySelector(".wind-direction")
const windSpeed = document.querySelector(".wind-speed")
const history = document.querySelector("#history")

document.addEventListener("DOMContentLoaded", () => {
  weatherURL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Argentina&lang=es`;
  fetch(weatherURL)
    .then((response) => response.json())
    .then((data) => {
        resumeDescription.innerHTML = data.current.condition.text;
        resumeIcon.innerHTML = `<img src="${data.current.condition.icon}"/>`;
        resumeTemp.innerHTML = `${data.current.temp_c}°C`;
        cityTime.innerHTML = data.location.localtime + ` <i class="fa-solid fa-clock"></i>`;
        cityLocation.innerHTML = data.location.country + ", " + data.location.name + ` <i class="fa-solid fa-location-dot"></i>`;
        feelsLike.innerHTML = `<p>Sensación térmica</p><div class="icon-h4-container"><i class="fa-solid fa-temperature-arrow-up"></i><h4>${data.current.feelslike_c}°C</h4></div>`;
        humidity.innerHTML = `<p>Humedad</p><div class="icon-h4-container"><i class="fa-solid fa-droplet"></i><h4>${data.current.humidity}%</h4></div>`;
        clouds.innerHTML = `<p>Nubes</p><div class="icon-h4-container"><i class="fa-solid fa-cloud"></i><h4>${data.current.cloud}%</h4></div>`;
        windDirection.innerHTML = `<p>Dirección del viento</p><div class="icon-h4-container"><i class="fa-solid fa-location-arrow"></i><h4>${data.current.wind_dir}</h4></div>`;
        windSpeed.innerHTML = `<p>Velocidad del viento</p><div class="icon-h4-container"><i class="fa-solid fa-wind"></i><h4>${data.current.wind_kph} km/h</h4></div>`
        
    });
});

function getWeather() {
  let city = document.getElementById("city").value;
  weatherURL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=es`;
  fetch(weatherURL)
    .then((response) => response.json())
    .then((data) => {
      resumeDescription.innerHTML = data.current.condition.text;
      resumeIcon.innerHTML = `<img src="${data.current.condition.icon}"/>`;
      resumeTemp.innerHTML = `${data.current.temp_c}°C`;
      cityTime.innerHTML = data.location.localtime + ` <i class="fa-solid fa-clock"></i>`;
      cityLocation.innerHTML = data.location.country + ", " + data.location.name + ` <i class="fa-solid fa-location-dot"></i>`;
      feelsLike.innerHTML = `<p>Sensación térmica</p><div class="icon-h4-container"><i class="fa-solid fa-temperature-arrow-up"></i><h4>${data.current.feelslike_c}°C</h4></div>`;
      humidity.innerHTML = `<p>Humedad</p><div class="icon-h4-container"><i class="fa-solid fa-droplet"></i><h4>${data.current.humidity}%</h4></div>`;
      clouds.innerHTML = `<p>Nubes</p><div class="icon-h4-container"><i class="fa-solid fa-cloud"></i><h4>${data.current.cloud}%</h4></div>`;
      windDirection.innerHTML = `<p>Dirección del viento</p><div class="icon-h4-container"><i class="fa-solid fa-location-arrow"></i><h4>${data.current.wind_dir}</h4></div>`;
      windSpeed.innerHTML = `<p>Velocidad del viento</p><div class="icon-h4-container"><i class="fa-solid fa-wind"></i><h4>${data.current.wind_kph} km/h</h4></div>`;
      
      city = document.getElementById("city").value = "";
      const searched = document.createElement("p");
      searched.innerHTML = `<p id="searched-city">${data.location.name}</p> <p id="searched-country">${data.location.country}</p>`;
      history.prepend(searched);
      history.style = "transform: translateY(1%); transition: all 0.3s ease;";
      searched.style = "transform: translateX(-100%); transition: all 0.5s ease; opacity: 0;";

      setTimeout(() => {
        history.style = "transform: translateY(0); transition: all 0.3s ease;";
      }, 350)
      setTimeout(() => {
        searched.style = "transform: translateX(0); transition: all 0.5s ease; opacity: 1;";
      }, 300);

      getForecast();

      const clear = document.getElementById("clear-history");
      clear.addEventListener("click", () => {
        history.style = "transform: translateY(-100%); transition: all 0.3s ease;";

        setTimeout(() => {
          history.textContent = "";
        }, 100)

        setTimeout(() => {
          history.style = "transform: translateY(0); transition: all 0.3s ease;";
        }, 150)

      });
    })
    .catch((error) => console.log(error))
  }

function handlerSubmit(e) {
  e.preventDefault();
  getWeather();
}

form.addEventListener("submit", handlerSubmit);
