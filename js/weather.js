
const API_key = `141eb34aae7f0421d71c7233821b9629`;

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    // console.log(position);
    // console.log("You live in", lat, long);
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_key}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weatherContainer.innerText = `${data.weather[0].main}/${data.main.temp}`;
        // const name = data.name;
        // const weather = data.weather[0].main;
        // console.log(data.name, data.weather[0].main);
    });
}

function onGeoError() {
    alert("Can find you. No weather for you!")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
