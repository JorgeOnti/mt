function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText == "") {
        alert("Por favor, introduce una tarea.");
        return;
    }

    const taskList = document.getElementById('task-list');
    
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox" onclick="toggleTask(this)">
                    <span>${taskText}</span>`;
    
    taskList.appendChild(li);
    taskInput.value = ""; 
}

function toggleTask(checkbox) {
    const taskItem = checkbox.parentElement;
    taskItem.classList.toggle('completed');
}

function clearList() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ""; // Borrar todo el contenido de la lista
}
