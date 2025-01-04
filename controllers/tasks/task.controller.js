import TaskService from '../../services/task.service.js';
import Task from '../../models/task.model.js';

class TaskController {
  static async newTask(req, res) {
    const { name } = req.body;
    try {
      const task = await TaskService.newTask(name);
      res.status(201).json(task);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }  

  static async getTasks(req, res) {
    try {
      const tasks = await TaskService.fetchTasks();
      res.status(200).json(tasks);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async deleteTask(req, res) {
    const { taskID } = req.params;
    try {
      await TaskService.deleteTask(taskID);
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async updateTask(req, res) {
    const { taskID } = req.params;
    const { name, completed } = req.body;
    
    try {
      const task = new Task(taskID, name, completed)
      const updatedTask = await TaskService.updateTask(task);
      if(!updatedTask){
        res.status(404).json({ message: 'Task not found' });
      }
      res.status(200).json(updatedTask);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default TaskController;