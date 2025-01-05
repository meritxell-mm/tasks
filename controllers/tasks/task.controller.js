import TaskService from '../../services/task.service.js';
import Task from '../../models/task.model.js';

class TaskController {

  /** 
   * Creates a new task.
   * @body {String} name - Task name
   * @returns {Task} - The created task with status 201.
   */
  static async newTask(req, res) {
    const { name } = req.body;
    try {
      const task = await TaskService.newTask(name);
      res.status(201).json(task);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }  

  /** 
   * Fetches all tasks.
   * @returns {Array<Task>} - List of tasks with status 200.
   */
  static async getTasks(req, res) {
    try {
      const tasks = await TaskService.fetchTasks();
      res.status(200).json(tasks);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  /** 
   * Deletes a task by its ID.
   * @param {int} taskID - The ID of the task to delete.
   * @returns {JSON} - Message confirming task deletion with status 200.
   */
  static async deleteTask(req, res) {
    const { taskID } = req.params;
    try {
      await TaskService.deleteTask(taskID);
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  /** 
   * Updates an existing task by its ID.
   * @param {int} taskID - The ID of the task to update.
   * @body {String} name - The new name for the task. Optional
   * @body {Boolean} completed - Whether the task is completed or not. Optional
   * @returns {Task} - The updated task with status 200 or error message.
   */
  static async updateTask(req, res) {
    const { taskID } = req.params;
    const { name, completed } = req.body;
    
    try {
      const existingTask = await TaskService.getById(taskID);
      if (!existingTask) {
        return res.status(404).json({ message: 'Task not found' });
      }

      if (name !== undefined) {
        existingTask.name = name; // Update name filed if provided
      }

      if (completed !== undefined ) {
        existingTask.completed = completed; // Update completed field if provided
      }
      
      const updatedTask = await TaskService.updateTask(existingTask);
      res.status(200).json(updatedTask);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default TaskController;