const API_KEY = "142cf2e87da294c334ff5a5e10049806";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.querySelector(
        "#weather span:first-child"
      );
      const cityContainer = document.querySelector("#weather span:last-child");
      const name = data.name;
      const weather = data.weather[0].main;
      weatherContainer.innerText = `${weather} / ${data.main.temp}`;
      cityContainer.innerText = name;
    });
}
function onGeoError() {
  alert("Cant't find you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
