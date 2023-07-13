console.clear()
// https://api.openweathermap.org/data/2.5/weather?q=islamabad&appid=beb4f69bdd1f020b330bb0e327928056&units=metric
const apiKey = "beb4f69bdd1f020b330bb0e327928056"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector("input");

const searchBtn = document.querySelector("button");

const weatherIcon = document.querySelector(".weather-icon")


const weatherData = async (city) => {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json()
    
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        setTimeout(()=>{
            document.querySelector(".error").style.display = "none"

        },3000)

        document.querySelector(".weather").style.display = "none"
        
    }

  
    else{

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr"
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "clouds.png"
    }
    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "clear.png"
    }
    if (data.weather[0].main == "Drizling") {
        weatherIcon.src = "drizzling.png"
    }
    if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png"
    }
    if (data.weather[0].main == "Mist") {
        weatherIcon.src = "mist.png"
    }
    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
}

}



searchBtn.addEventListener("click", () => {
    weatherData(searchBox.value)

})
searchBtn.addEventListener('keypress', () => {
    weatherData(searchBox.value)

})
