let date = document.querySelector("#currentdateTime");
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[new Date().getMonth()];
let hour = new Date().getHours();
let minutes = new Date().getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[new Date().getDay()];
let dateNumber = new Date().getDate();
date.innerHTML = `${day} ${month} ${dateNumber} - ${hour}:${minutes}`;

function displayCityconditions(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#currentTemp").innerHTML = Math.round(
    response.data.main.temp
  );
}
function searchCity(event) {
  event.preventDefault();
  let apiKeys = "53990df67458c502970ecd6b5b32e234";
  let value = document.querySelector("#search-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKeys}&units=metric`;
  axios.get(apiUrl).then(displayCityconditions);
}
let form = document.querySelector("#search");
form.addEventListener("submit", searchCity);
let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");

function changeToCelsius(entered) {
  entered.preventDefault();
  let temperatureElement = document.querySelector("#currentTemp");
  let temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = Math.round(((temperature - 32) * 5) / 9);
}

function changeToFahrenheit(entered) {
  entered.preventDefault();
  let temperatureElement = document.querySelector("#currentTemp");
  let temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
}

celsius.addEventListener("click", changeToCelsius);
fahrenheit.addEventListener("click", changeToFahrenheit);
