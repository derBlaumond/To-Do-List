const API_KEY = "a957866f9916e0efc55bcaa034d6dea0";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const icon = document.querySelector("#weather-icon");

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      city.innerText = data.name;
      const weatherData = data.weather[0].main;
      const tempData = data.main.temp;
      weather.innerText = `${weatherData}, ${tempData}'C `;
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    });
}
function onGeoFail() {
  alert("Can't find where you are. Make a location!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);
