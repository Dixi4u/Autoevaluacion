import tasksModel from "../models/Tasks.js";

const tasksController = {};

// SELECT
tasksController.getTasks = async (req, res) => {
    const tasks = await tasksModel.find();
    res.json(tasks);
};

// INSERT
tasksController.insertTask = async (req, res) => {
    const { title, description, completed } = req.body;
    const newTask = new tasksModel({ title, description, completed });
    await newTask.save();
    res.json({ message: "Task saved successfully" });
};

// DELETE
tasksController.deleteTask = async (req, res) => {
    await tasksModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
};

// UPDATE
tasksController.updateTask = async (req, res) => {
    const { title, description, completed } = req.body;
    const updatedTask = await tasksModel.findByIdAndUpdate(
        req.params.id,
        { title, description, completed },
        { new: true }
    );
    res.json({ message: "Task updated successfully", updatedTask });
};

export default tasksController;