let addBtn = document.getElementById("add");
let taskBox = document.getElementById("taskBox");
let checkSound = new Audio("sound.mp3"); // chat gpt
// already in the HTML

// adding a new task
addBtn.addEventListener("click", function createNewTask(){
    let taskName = prompt("Enter task name");
    if (!taskName) return; // chat gpt

    let newTaskBox = document.createElement("div");
    newTaskBox.setAttribute("class", "newTaskBox");
    let text = document.createElement("h2");
    text.setAttribute("class" ,"text");
    let icons = document.createElement("div");
    icons.setAttribute("class", "icons");

    text.textContent = taskName;

    // creating 3 icons => chat gpt
    let checkBtn = document.createElement("i");
    checkBtn.classList.add("fa-solid", "fa-circle-check", "check", "icn");
    checkBtn.addEventListener("click", function (){

        // Reset sound to the beginning & handle error => chat gpt
        checkSound.currentTime = 0;
        checkSound.play().catch(error => console.error("Audio play error:", error));

        newTaskBox.classList.toggle("complete");
        if (newTaskBox.classList.contains("complete")){
            newTaskBox.style.backgroundColor = "rgb(57, 155, 44)";
            checkBtn.classList.add("fa-x");
        } else {
            newTaskBox.style.backgroundColor = "";
            checkBtn.classList.remove("fa-x");
        }
    });
    
    let editBtn = document.createElement("i"); // chat gpt
    editBtn.classList.add("fa-solid", "fa-pen", "edit", "icn"); // chat gpt
    editBtn.addEventListener("click", function (){ // chat gpt
        checkSound.currentTime = 0;
        checkSound.play().catch(error => console.error("Audio play error:", error));
        
        let editTaskName = prompt("Enter new task name"); // by me
        if(editTaskName){ // by me
            text.textContent = editTaskName;
        }
    });
    let deleteBtn = document.createElement("i"); // chat gpt
    deleteBtn.classList.add("fa-solid", "fa-trash-can", "delete", "icn"); // chat gpt
    deleteBtn.addEventListener("click", function (){ // chat gpt
        checkSound.currentTime = 0;
        checkSound.play().catch(error => console.error("Audio play error:", error));
        
        newTaskBox.remove(); // by me
    });


    // by me
    icons.appendChild(checkBtn);
    icons.appendChild(editBtn);
    icons.appendChild(deleteBtn);

    newTaskBox.appendChild(text); // must be appended before icons div
    newTaskBox.appendChild(icons);
    taskBox.appendChild(newTaskBox); // element append is the last step of its creation
});

// all written inside the addBtn function so all effects occur for the same task

