fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=landscape")
.then(res => res.json())
.then(data => {
        console.log(data)
        document.body.style.backgroundImage = `url("${data.urls.full}")`
        if(data.location.name) {
          document.getElementById("img-location").innerHTML = `
          <i class="fa-solid fa-location-dot"></i>
          <span>${data.location.name}</span>`
    }  
})
