const APIKEY = "441ce26adfbaa32f10953d8d02a2443f"



function onGeoSuccess(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    console.log("you live in ",lat, lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`
    console.log(url)
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        const weathercontainer = document.querySelector("#weather span:first-child")
        const citycontainer = document.querySelector("#weather span:last-child")
        const name = data.name
        const weather = `${data.weather[0].main} / ${data.main.temp}`

        
        weathercontainer.innerText = weather
        citycontainer.innerText = name



        });

}

function onGeoError() {
    alert("Can't find your location.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)

















