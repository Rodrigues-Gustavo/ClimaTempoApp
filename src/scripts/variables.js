const search = document.querySelector('.search');
const searchInput = document.querySelector('#searchInput');
const city = document.querySelector('.city');
const tempInfos = document.querySelector('.tempInfos span');
const maxTemp = document.querySelector('.maxTemp span');
const minTemp = document.querySelector('.minTemp span');
const feelsLike = document.querySelector('.feels-like span')
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.windSpeed');
const atmosphericPressure = document.querySelector('.atmosphericPressure span');
const cloudIcon = document.querySelector('.cloudIcon span');
const windIcon = document.querySelector('.windIcon span');
const currentDescription = document.querySelector('.currentWeatherDescription');
const currentWeatherIcon = document.querySelector('.currentWeatherIcon');
const result = document.querySelector('.results');
const countryFlags = document.querySelector('#countryFlags');
const apiCountryFlagsURL = "https://countryflagsapi.com/png/";

export { search, searchInput, city, tempInfos, maxTemp, minTemp, feelsLike, humidity, windSpeed, atmosphericPressure, cloudIcon, windIcon, currentDescription, currentWeatherIcon, result, countryFlags, apiCountryFlagsURL
}