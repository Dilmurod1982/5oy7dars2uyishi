const form = document.querySelector("form");
const newTodo = document.getElementById("new-todo");
let ul = document.getElementById("todo-list");
let temp = document.querySelector("template");

newTodo.addEventListener("keypress", (e) => {
  let clon = temp.content.cloneNode(true);
  let textP = document.querySelector("#p-text");
  //   if (e.key == "Enter") {

  textP.textContent = form["new-Todo"].value;
  ul.appendChild(clon);
  console.log(newTodo.value);
  console.log(form["new-todo"].value);
  //   }
});
