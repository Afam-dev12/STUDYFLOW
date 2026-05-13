const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList")

const totalTasks = document.querySelectorAll(".card h3")[0];
const completedTasks = document.querySelectorAll(".card h3")[1];
const pendingTasks = document.querySelectorAll(".card h3")[2]

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("please enter a task");
        return;
    }

    const task = {
        text: taskText,
        completed: false
    };

    tasks.push(task);

    saveTasks();
    renderTasks();

    taskInput.value = "";
}

function renderTasks() {

    taskList.innerHTML = "";

    let completed = 0;

    tasks.forEach((task, index) => {

        if (task.completed) {
            completed++;
        }

        const li = document.createElement("li");

        li.innerHTML =`
          <span
              onclick="toggleTask(${index})"
              style="
                cursor:pointer;
                text-decoration:${task.completed ? "line-through" : "none"};
                opacity:${task.completed ? "0.6" : "1"};
              " 
         > 
            
               ${task.text}
         </span>   

         <button onclick="deleteTask(${index})">
              delete
         </button>    

        `;
         
        taskList.appendChild(li)

    });

    totalTasks.textContent = tasks.length;
    completedTasks.textContent = completed;
    pendingTasks.textContent = tasks.length - completed;
}

function toggleTask(index) {

    tasks[index].completed = !tasks[index].completed;

    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);

    saveTasks();
    renderTasks();
}

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}      