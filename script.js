function addTask() {
    const input = document.getElementById('taskinput');
    
    const taskText = input.ariaValueMax.trim();

    if (taskText == "") {
        alert('please enter a task');
        return;

    }
   
    const li = document.createElement('li');

    li.innerHTML = `
       $(taskText)

       <button onclick='deleteTask(this)'>
           Delete
        </button>
        
     `;
     
     document.getElementById('taskList').appendChild(li);

     input.value = "";

}

function deleteTask(button) {
    button.parentElement.remove();
}
