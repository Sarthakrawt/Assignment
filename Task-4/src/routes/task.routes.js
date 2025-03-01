import { Router } from "express";

// let tasks = ["working"]
// you can check above code 
let tasks = [];

const router = Router();
router.get("/api/tasks", (req, res) => {
    res.status(200).json(tasks);
});


router.post("/api/tasks", (req, res) => {
    const { name, completed } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Task name is required" });
    }
    const newTask = {
        id: tasks.length + 1,
        name,
        completed: completed || false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});


router.delete("/api/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== taskId);
    res.status(200).json({ message: "Task deleted successfully" });
});

export default router;