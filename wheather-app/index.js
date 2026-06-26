async function getWeather(){
const city = document.getElementById('cityInput').value;
const apiKey ="dd2dcca36ef78ed63bf665413d903ad5";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
try {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById('weatherResult').innerHTML = `
    <h3>Weather in ${data.name}</h3>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Weather: ${data.weather[0].description}</p>
    `;
} catch (error) {
    console.error('Error fetching weather data:', error);
}
}