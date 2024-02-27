let inputVal = document.querySelector(".middle input");
let addBtn = document.querySelector("button");
let Tasks = document.querySelector(".last");

addBtn.addEventListener("click", () => {
  taskAdding();
});

//task adding into parent div
const taskAdding = () => {

    //Div 1 ************
  let t1 = document.createElement("div");
  t1.classList.add("t1");

  let checkbox = document.createElement("input");
  checkbox.type="checkbox";
  let paragraph = document.createElement("p");
  paragraph.textContent = inputVal.value; 
  t1.appendChild(checkbox);
  t1.appendChild(paragraph);

  //Div 2 ************
  let icon=document.createElement("div");
  icon.classList.add("icons");

  let editIcon=document.createElement("i");
  editIcon.classList.add("fa-solid","fa-pen-to-square");
  let deleteIcon=document.createElement("i");
  deleteIcon.classList.add("fa-solid","fa-trash");
  icon.appendChild(editIcon);
  icon.appendChild(deleteIcon)

  //Adding divs  to main last or parent div
  Tasks.appendChild(t1);
  Tasks.appendChild(icon);
};
