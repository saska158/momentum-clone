navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
    .then(res => {
        if(!res.ok) {
            throw Error("Weather data not available")
        }
        return res.json()
    })
    .then(data => {
        console.log(data)
        data.name = 'Semendria' ? data.name = "Smederevo" : data.name
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        document.getElementById("weather").innerHTML = `
        <img src=${iconUrl}>
        <p class="temp">${Math.round(data.main.temp)}°</p>
        <p class="city">${data.name}</p>
        `
    })
})