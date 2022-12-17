fetch("https://type.fit/api/quotes")
.then(res => res.json())
.then(data => {
    console.log(data)
    const randomNum = Math.floor(Math.random() * 1643)
    document.getElementById("quote").innerHTML = `
    <p>"${data[randomNum].text}"</p>
    <p>${data[randomNum].author}</p>
    `
})