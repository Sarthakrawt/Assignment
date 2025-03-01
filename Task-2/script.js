document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        taskList.innerHTML = "";
        tasks.forEach(task => addTaskToDOM(task.text, task.completed));
    };

    const saveTasks = () => {
        const tasks = [];
        document.querySelectorAll(".task-item").forEach(task => {
            tasks.push({ text: task.querySelector("span").textContent, completed: task.classList.contains("completed") });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

   
    const addTaskToDOM = (taskText, completed = false) => {
        const li = document.createElement("li");
        li.classList.add("task-item");
        if (completed) li.classList.add("completed");
        
        const span = document.createElement("span");
        span.textContent = taskText;
        
        const completeButton = document.createElement("button");
        completeButton.textContent = "X";
        completeButton.classList.add("complete-btn");
        completeButton.addEventListener("click", () => {
            li.classList.toggle("completed");
            saveTasks();
        });
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "-";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", () => {
            li.remove();
            saveTasks();
        });
        
        li.appendChild(span);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        saveTasks();
    };

    
    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Task cannot be empty!");
            return;
        }
        addTaskToDOM(taskText);
        taskInput.value = "";
    });

    
    loadTasks();
});