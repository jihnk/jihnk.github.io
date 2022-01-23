function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const weather = document.querySelector("#weather div:first-child");
            const city = document.querySelector("#weather div:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

const API_KEY = "aa2bc2fd4858e041ab19bec041f45024";

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

