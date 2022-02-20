const todoForm = document.getElementById("todo-form");
// const todoInput = todoForm.querySelector("input");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

let todos = [];
const TODOS_KEY = "todos";

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(e) {
    // console.dir(e.target.parentElement.innerHTML);
    const li = e.target.parentElement;
    // console.log(li.id);
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    saveTodos();
    li.remove();
}
function makeTodo(newTodo) {
    // console.log("i will make", newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerHTML = newTodo.txt;
    const button = document.createElement("button");
    button.innerText = "💸";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);    
    // console.log(li);
    todoList.appendChild(li);
}

function handleTodoSubmit(e) {
    e.preventDefault();
    // console.log(todoInput.value);
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoobj = {
        txt: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoobj);
    // console.log(todos);
    // console.log(newTodo, todoInput.value);
    makeTodo(newTodoobj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodo = localStorage.getItem(TODOS_KEY);
// console.log(saveTodos);

if (savedTodo !== null) {
    const parsedTodo = JSON.parse(savedTodo);
    todos = parsedTodo;
    // console.log(parsedTodo);
    parsedTodo.forEach(makeTodo);
}


