let inputSearch = document.querySelector(".input-search")
let btnSearch = document.querySelector(".btn-search")
let loaderWeather = document.querySelector(".loader")
let weatherLocation = document.querySelector(".weather-location")

btnSearch.addEventListener("click", function(){
    let cityValue = inputSearch.value
    let API_KEY = 'da283b6358e550e5d53bcf7ddcaa4460'

    weatherLocation.style.opacity = '0'

    loaderWeather.style.display = 'block'

    setTimeout(function(){
        loaderWeather.style.display = 'none'
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${API_KEY}`, {
            method: "GET"
        })
    
        .then(response => {
            if(!response.ok){
                console.error("Error")
            }
            return response.json()
        })
    
        .then(data => {
            console.log(data)
    
            let weatherLocation = document.querySelector(".weather-location")
            let roundedTemp = Math.round(data.main.temp)
            let weatherDescription = data.weather[0].description
            let iconCode = data.weather[0].icon
            let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    
            weatherLocation.innerHTML = `
                <img class="weather-img" src="${iconUrl}" alt="${weatherDescription}">
                <h2>Weather in ${cityValue}:</h2> 
                <p class="weather__temp-descr">Temperature: ${roundedTemp}°C</p> 
                <p class="weather__location-descr">Condition: ${weatherDescription}</p> 
            `
        })
    
        .catch(error => {
            console.error(error)
        })

        weatherLocation.style.opacity = '1'
    }, 2500)
})