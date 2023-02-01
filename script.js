const API_KEY = ''
let cityName = 'London'
const form = document.getElementById('searchForm');
const tempCard = document.getElementById('temp')
const feels_likeCard = document.getElementById('feels_like')
const humidtyCard = document.getElementById('humidty')
const windCard = document.getElementById('wind')
const searchButton = document.getElementById('search');
const cards = document.querySelector('.cards');
const cityCard = document.getElementById('city')



form.addEventListener('submit' , (e) => {
    e.preventDefault();
    cityName = searchButton.value
    fetchData(cityName);
    cards.style.display = 'flex';
    
});
async function fetchData(city){  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url , {mode:'cors'});
    const weatherData = await response.json();
    cityCard.textContent = searchButton.value.toUpperCase();
    tempCard.textContent = `${weatherData.main.temp} ℃`;
    feels_likeCard.textContent = `FEELS LIKE: ${weatherData.main.feels_like} ℃`;
    windCard.textContent = `WIND: ${wind = weatherData.wind.speed} Km/s`;
    humidtyCard.textContent = `HUMIDITY: ${humidity = weatherData.main.humidity}% `;
    

}
