import  { search, searchInput, city, tempInfos, maxTemp, minTemp, feelsLike, humidity, windSpeed, atmosphericPressure, cloudIcon, windIcon, currentDescription, currentWeatherIcon, result } from './variables.js'

const html = document.querySelector('html');
const checkbox =  document.querySelector('#hide-checkbox');

function toggle() {
    checkbox.addEventListener('change',() => {
        html.classList.toggle('light-mode');
    });
};

toggle();

const getWeatherInfos = async(searchCity) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(searchCity)}&appid=d0e96fabec71e8c927fe9707b98c82fc&units=metric&lang=pt_br`

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
}

const showWeatherInfos = async (searchCity) => {
    const data = await getWeatherInfos(searchCity);

    city.innerHTML = `${data.name}, ${data.sys.country}`;
    tempInfos.innerText = parseInt(data.main.temp);
    currentDescription.innerHTML = `${data.weather[0].description}`;
    maxTemp.innerHTML = parseInt(data.main.temp_max);
    minTemp.innerHTML = parseInt(data.main.temp_min);
    feelsLike.innerHTML= parseInt(data.main.feels_like);
    humidity.innerHTML = `umidade: ${data.main.humidity}%`;
    windSpeed.innerHTML = `vento: ${data.wind.speed} km/h`;
    atmosphericPressure.innerHTML = data.main.pressure;
    cloudIcon.innerHTML = `${data.clouds.all}%`;
    windIcon.innerText = `${data.wind.speed} km/h`;
    currentWeatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    
    result.style.display = 'block';
};

search.addEventListener("click", (e) => {
    e.preventDefault();
    const searchCity = searchInput.value;
    showWeatherInfos(searchCity);
});