const newTodo = document.getElementById("new-todo");
let ul = document.getElementById("todo-list");
let temp = document.querySelector("template");

newTodo.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    let clon = temp.content.cloneNode(true);
    let textP = clon.querySelector("#p-text");
    textP.textContent = newTodo.value;
    ul.appendChild(clon);
    newTodo.value = "";
  }
});
