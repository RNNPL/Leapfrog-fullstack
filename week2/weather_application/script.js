const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-btn");
const statusEl = document.querySelector("#status");
const weatherResult = document.querySelector("#weather-result");

const API_KEY = "c7f70661d273defd632c06ee0960b907";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

async function fetchWeather(city) {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  //   console.log(await response.json())
  if (!response.ok) {
    renderWeatherNotFound();
    throw new Error("City not found");
  }
  return response.json();
}
function renderWeather(data) {
  weatherResult.innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp} C </p>
    <div class="icon-div">
    <p>Condition: ${data.weather[0].description}  
    </p><img class="icon"
    src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
    alt="${data.weather[0].description}">
    </div>
    <p>Humidity: ${data.main.humidity}%</p>
    
  `;
  weatherResult.style.display = "flex";
  statusEl.textContent = "Enter a city and click search.";

  statusEl.style.color = " #334155";
}
function renderWeatherNotFound() {
  statusEl.textContent = "City Not Found";
  weatherResult.style.display = "none";
  statusEl.style.color = "red";
}
searchBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) {
    return;
  }
  const data = await fetchWeather(city);

  renderWeather(data);
});
