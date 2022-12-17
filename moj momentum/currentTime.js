function getCurrentTime() {
    const date = new Date()
    const time = date.toLocaleTimeString('en-US', {timeStyle: "short", hour12: false})
    document.getElementById("time").textContent = time
}

setInterval(getCurrentTime, 1000)