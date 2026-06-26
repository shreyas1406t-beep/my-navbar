async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = "dd2dcca36ef78ed63bf665413d903ad5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById('weatherResult').innerHTML = `
      <div class="city-name">${data.name}</div>
      <div class="temp">${Math.round(data.main.temp)}°</div>
      <div class="description">${data.weather[0].description}</div>

      <div class="divider"></div>

      <div class="extra-info">
        <div class="info-item">
          <div class="info-label">Feels Like</div>
          <div class="info-value">${Math.round(data.main.feels_like)}°</div>
        </div>
        <div class="info-item">
          <div class="info-label">Humidity</div>
          <div class="info-value">${data.main.humidity}%</div>
        </div>
        <div class="info-item">
          <div class="info-label">Wind</div>
          <div class="info-value">${data.wind.speed} km/h</div>
        </div>
      </div>
    `;
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `
      <div class="error-text">City not found. Try again.</div>
    `;
    console.error('Error fetching weather data:', error);
  }
}