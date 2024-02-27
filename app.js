let inputVal = document.querySelector(".middle input");
let addBtn = document.querySelector("button");
let Tasks = document.querySelector(".parent-last");

addBtn.addEventListener("click", () => {
  taskAdding();
});

inputVal.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    taskAdding();
  }
});

Tasks.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("fa-trash")) {
    deleteTask(evt.target.closest(".last"));
  }
});

//Task deleting function
const deleteTask = (task) => {
  task.remove();
};

//task adding into parent div
const taskAdding = () => {
  let TaskContainer = document.createElement("div");
  TaskContainer.classList.add("last");
  //Div 1 ************
  let t1 = document.createElement("div");
  t1.classList.add("t1");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let paragraph = document.createElement("p");
  paragraph.textContent = inputVal.value;
  t1.appendChild(checkbox);
  t1.appendChild(paragraph);

  //Div 2 ************
  let icon = document.createElement("div");
  icon.classList.add("icons");

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash");
  icon.appendChild(deleteIcon);

  //Adding divs  to main last or parent div
  TaskContainer.appendChild(t1);
  TaskContainer.appendChild(icon);

  //adding to grandparent div
  Tasks.appendChild(TaskContainer);
};
