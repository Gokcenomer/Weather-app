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
    cityName = searchButton.value
    let temp;
    let feels_like;
    let humidity;
    let wind;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url , {mode:'cors'});
    const weatherData = await response.json();
    temp = weatherData.main.temp;
    feels_like = weatherData.main.feels_like
    humidity = weatherData.main.humidity
    wind = weatherData.wind.speed
    cityCard.textContent = cityName.toUpperCase();
    tempCard.textContent = `${temp} ℃`;
    feels_likeCard.textContent = `FEELS LIKE: ${feels_like} ℃`;
    windCard.textContent = `WIND: ${wind} Km/s`;
    humidtyCard.textContent = `HUMIDITY: ${humidity}% `;
    

}
