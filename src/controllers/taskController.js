const Task = require("../models/Task");

// Create Task
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json({
      success: true,
      task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Tasks
exports.getTasks = async (req, res) => {
  try {
    const { id, priority, status } = req.query;

    if (id) {
      const task = await Task.findById(id);

      if (!task) {
        return res.status(404).json({
          message: "Task not found",
        });
      }

      return res.status(200).json(task);
    }

    let filter = {};

    if (priority) filter.priority = priority;
    if (status) filter.status = status;

    const tasks = await Task.find(filter);

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Task
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Task Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Mark Complete
exports.markComplete = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    if (!task.dueDate) {
      return res.status(400).json({
        message: "Due Date is required",
      });
    }

    if (
      !task.description ||
      task.description.trim().length < 20
    ) {
      return res.status(400).json({
        message:
          "Description must be at least 20 characters",
      });
    }

    task.status = "Completed";

    await task.save();

    res.status(200).json({
      message: "Task Completed",
      task,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};