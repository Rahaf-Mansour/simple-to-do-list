const inputBox = document.getElementById('add-text'); //input
const unorderedList = document.getElementById('unordered-list'); //ul


function addTask(){
    if(inputBox.value !== ""){ // if the input not empty don't do anything
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        unorderedList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"; // cross icon (Unicode Character “×” )
        li.appendChild(span);
    }
    inputBox.value = "" // after adding the task, return the input value empty as before
    saveTasks();
}

unorderedList.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("selected"); // toggle between adding and removing the "selected" class name of the LI element
        saveTasks();
    }
    else if (e.target.tagName === "SPAN") { // if we click on the cross icon then remove the parent element which is "li"
        e.target.parentElement.remove();
        saveTasks();
    }
});

// Local storage issues:

// a function to save the updated even when closing / refreshing the web browser window

function saveTasks(){
    localStorage.setItem("task", unorderedList.innerHTML); // must be invokes after each data updates
};

function showTasks(){
    unorderedList.innerHTML = localStorage.getItem("task"); // must be invoked to show the local storage updates displayed on the web browser
};

showTasks();




