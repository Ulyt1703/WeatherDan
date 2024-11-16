let inputSearch = document.querySelector(".input-search")
let btnSearch = document.querySelector(".btn-search")

btnSearch.addEventListener("click", function(){
    let cityValue = inputSearch.value
    let API_KEY = 'da283b6358e550e5d53bcf7ddcaa4460'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}`, {
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
        let temp = data.main.temp; 
        let weatherDescription = data.weather[0].description; 
        let iconCode = data.weather[0].icon; 
        let iconUrl = 'https://openweathermap.org/img/wn/${iconCode}@2x.png'; 

        // Створення елементів для відображення 
        weatherLocation.innerHTML = ` 
          <h2>Погода в ${cityValue}</h2> 
          <p>Температура: ${temp}°C</p> 
          <p>Стан: ${weatherDescription}</p> 
          <img src="${iconUrl}" alt="${weatherDescription}"> 
        `; 
     
    })

    .catch(error => {
        console.error(error)
    })
})