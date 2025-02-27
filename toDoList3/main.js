let addBtn = document.getElementById("add");
let content = document.getElementById("content");
let clickSound = new Audio("sound.mp3");

// add new task
addBtn.addEventListener("click", function () {
    clickSound.currentTime = 0;
    clickSound.play();
    let getTaskName = prompt("Enter task name");
    if (getTaskName){
    let task = document.createElement("div");
    task.setAttribute("class", "task");
    
    let p = document.createElement("p");
    p.setAttribute("class", "text");
    p.textContent = getTaskName;
    
    let buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("class", "options");
    
    let checkBtn = document.createElement("button");
    checkBtn.setAttribute("class", "check");
    checkBtn.classList.add("option");
    checkBtn.textContent = "check";
    
    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit");
    editBtn.classList.add("option");
    editBtn.textContent = "edit";
    
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete option");
    deleteBtn.classList.add("option");
    deleteBtn.textContent = "delete";

    buttonsDiv.appendChild(checkBtn);
    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(deleteBtn);
    task.appendChild(p);
    task.appendChild(buttonsDiv);
    content.appendChild(task);

    // check button events
checkBtn.addEventListener("click", function () {
    clickSound.currentTime = 0;
    clickSound.play();
    if (checkBtn.classList.contains("check")){
    task.style.backgroundColor = "rgb(48, 224, 86)";
    checkBtn.classList.remove("check");
    checkBtn.classList.add("uncheck");
    checkBtn.textContent = "uncheck";
    } else  if (checkBtn.classList.contains("uncheck")){
    task.style.backgroundColor = "#fff";
    checkBtn.classList.remove("uncheck");
    checkBtn.classList.add("check");
    checkBtn.textContent = "check";
        }
    });

    // edit button events
editBtn.addEventListener("click", function () {
    clickSound.currentTime = 0;
    clickSound.play();
    let editTaskName = prompt("Enter new task name");
    if (editTaskName){
        p.textContent = editTaskName;
        }
    });

    // remove button events
    deleteBtn.addEventListener("click", function () {
    clickSound.currentTime = 0;
    clickSound.play();
    let confirmDelteion = confirm("Are you sure you want to delete this task?");
    if (confirmDelteion){
        task.remove();
    }
    });

   }; // End of (if) condition of first event
});

// clear all button
document.getElementById("clear").addEventListener("click", function () {
    clickSound.currentTime = 0;
    clickSound.play();
    let confirmClear = confirm("Do you want to clear all tasks?");
    if (confirmClear){
        content.innerHTML = '';
    }
    // add task class to tasks
})