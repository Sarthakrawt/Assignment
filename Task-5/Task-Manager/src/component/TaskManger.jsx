import React, { useState, useEffect } from "react";

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

  
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(savedTasks);
    }, []);

    
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (task.trim() === "") return;
        setTasks([...tasks, { id: Date.now(), name: task }]);
        setTask("");
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
            <h2>Task Manager</h2>
            <div>
                <input 
                    type="text" 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a task..." 
                    style={{ padding: "10px", width: "70%", marginRight: "10px" }}
                />
                <button onClick={addTask} style={{ padding: "10px", background: "#28a745", color: "white", border: "none", cursor: "pointer" }}>
                    Add Task
                </button>
            </div>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
                {tasks.map((task) => (
                    <li key={task.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f4f4f4", padding: "10px", margin: "5px 0", borderRadius: "5px", color:"black" }}>
                        {task.name}
                        <button onClick={() => deleteTask(task.id)} style={{ background: "#dc3545", color: "white", border: "none", cursor: "pointer", padding: "5px 10px" }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;
