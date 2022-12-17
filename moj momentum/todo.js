const todoBtn = document.getElementById("todo-btn")
const todoModal = document.getElementById("todo-modal")
const todoModalInner = document.getElementById("todo-modal-inner")
const newTodoBtn = document.getElementById("new-todo-btn")
const newTodoInput = document.getElementById("new-todo-input")
const noTodos = document.getElementById("no-todos")
const clearTodos = document.getElementById("clear-todos")


let todoList = JSON.parse(localStorage.getItem("todos")) || []

todoBtn.addEventListener("click", () => {
    todoModal.classList.toggle("todo-modal-appear")
    if(todoList.length > 0) {
        newTodoInput.style.visibility = "visible"
        todoModalInner.classList.add("todo-modal-inner-list")
        clearTodos.style.display = 'block'
        render() 
    }
})

newTodoBtn.addEventListener("click", e => {
    newTodoInput.style.visibility = "visible"
    newTodoBtn.style.display = "none"
})


newTodoInput.addEventListener("keypress", e => {
    if(e.key === "Enter") {
        noTodos.style.display = "none"
        todoModalInner.classList.add("todo-modal-inner-list")
        clearTodos.style.display = 'block'

        const text = newTodoInput.value
        if(text) {
            addTodo({text})
        }
    }
})

todoModalInner.addEventListener("click", e => {
    deleteTodo(e)
    crossingTodo(e)
})




clearTodos.addEventListener("click", () => {
    todoList = []
    render()
    clearTodos.style.display = 'none'
})



function addTodo(todo) {
    const newTodo = {
        text: todo.text,
        id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1,
    }
    todoList = [...todoList, newTodo]
    newTodoInput.value = ''
    render()
}

function deleteTodo(e) {
    e.stopPropagation()
    if(!e.target.matches(".delete-todo")) return
    const id = e.target.dataset.id
    todoList = todoList.filter(todo => todo.id !== Number(id))
    render()
    if(todoList.length === 0) {
        clearTodos.style.display = 'none'
    }
}    


function crossingTodo(e) {
    e.stopPropagation()
    if(!e.target.matches(".todo-check")) return
    const id = e.target.id
    const labels = document.getElementsByTagName('label')
    const labelsArr = Array.from(labels)
    
    const targetLabel = labelsArr.filter(label => label.htmlFor === id)[0]
    targetLabel.classList.toggle('line-through')
}





function displayTodos() {
    todoModalInner.innerHTML = todoList.map(todo => `
    <div class="todo-item" data-id="${todo.id}}">
     <input class="todo-check" id="${todo.id}" type="checkbox"> 
     <label class="todo-label" for="${todo.id}" data-id="${todo.id}">${todo.text}</label>
     <button class="delete-todo" data-id="${todo.id}">x</button>
    </div>
    `).join('')
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todoList))
} 

function render() {
    displayTodos()
    saveTodos()
}




 