import TaskRepository from '../repositories/task.repo.js';

class TaskService {

  static async getById(taskID) {
    try { 
      return await TaskRepository.getById(taskID);
    } catch (err) {
      throw new Error('Error adding task');
    }
  }

  static async newTask(name) {
    try { 
      const result = await TaskRepository.insert(name);
      return await TaskRepository.getById(result.insertId);
    } catch (err) {
      throw new Error('Error adding task');
    }
  }

  static async fetchTasks() {
    try {
      return await TaskRepository.getAll();
    } catch (err) {
      throw new Error('Error fetching tasks');
    }
  }

  static async deleteTask(taskID) {
    try {
      return await TaskRepository.delete(taskID);
    } catch (err) {
      throw new Error('Error fetching tasks');
    }
  }

  static async updateTask(task) {
    try {
      const result = await TaskRepository.update(task);
      return await TaskRepository.getById(task.id);
    } catch (err) {
      throw new Error('Error updating task');
    }
  }
}

export default TaskService;
