const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// GET all tasks
router.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// POST create new task
router.post('/task', async (req, res) => {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
});

// PUT update task
router.put('/task/:id', async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
});

// DELETE task
router.delete('/task/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
});

module.exports = router;