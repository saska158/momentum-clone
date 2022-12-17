const centerModal = document.getElementById("center-modal")
const centerInput = document.getElementById("center-input")
const centerLabel = document.getElementById("center-label")
const nameModal = document.getElementById('name-modal')
const nameInput = document.getElementById("name-input")
const nameLabel = document.getElementById("name-label")
const focusTodayLabel = document.getElementById("focus-today-label")
const focusToday = document.getElementById("focus-today")
const focusTodayCheck = document.getElementById("focus-today-check")
const deleteFocus = document.getElementById("delete-focus")


nameInput.addEventListener("keypress", e => {
    if(e.key === 'Enter') {
       if(nameInput.value) {
        localStorage.setItem('userName', nameInput.value)
        renderGreeting(nameInput.value)
        nameModal.style.display = 'none'
       }
       
    }
})

const userName = localStorage.getItem('userName')


if(localStorage.hasOwnProperty('userName')) {
    nameModal.style.display = 'none'
 }

function renderGreeting(name) {
    if(name) {
        const date = new Date()
        const currentHours = date.getHours()
        let greeting

        if(currentHours < 12) {
            greeting = `Good morning, ${name}.`
         } else if(currentHours < 18) {
           greeting = `Good afternoon, ${name}.`
         } else { greeting = `Good evening, ${name}.`}

        const greetingPar = document.getElementById("greeting")
        greetingPar.textContent = greeting  
        centerModal.classList.add("center-modal-appear")     
    }
}

renderGreeting(userName)



centerInput.addEventListener("keypress", e => {
    if(e.key === "Enter") {
        if(centerInput.value) {
           localStorage.setItem('userFocus', centerInput.value)
           renderFocus(centerInput.value)
        }
    }
})

const userFocus = localStorage.getItem('userFocus')


function renderFocus(focus) {
    focusToday.style.display = 'block'
    focusTodayLabel.innerText = focus
    centerInput.value = ''
    centerInput.style.display = "none"
    centerLabel.style.display = 'none'
}

if(localStorage.hasOwnProperty('userName')) {
    renderFocus(userFocus)
}


function clearFocus() {
    focusToday.style.display = 'none'
    centerInput.style.display = "block"
    centerLabel.style.display = 'block'
    localStorage.removeItem('userfocus')
}



focusTodayCheck.addEventListener("click", () => {
   document.getElementById("focus-today-label").classList.toggle("line-through")
})

deleteFocus.addEventListener("click", e => {
    clearFocus()
})






