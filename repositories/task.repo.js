import dbQuery from '../db/dbQuery.js';

class TaskRepository {

  static async getAll() {
    const query = 'SELECT * FROM tasks';
    return await dbQuery(query);
  }

  static async getById(id) {
    const query = 'SELECT * FROM tasks WHERE id = ?';
    const result = await dbQuery(query, [id]);
    return result[0];
  }

  static async insert(name) {
    const query = 'INSERT INTO tasks (name) VALUES (?)';
    return await dbQuery(query, [name]);
  }

  static async delete(taskID) {
    const query = 'DELETE FROM tasks WHERE id = ?';
    return await dbQuery(query, [taskID]);
  }

  static async update(task) {
    const query = 'UPDATE tasks SET name = ?, completed = ? WHERE id = ?'
    return await dbQuery(query, [task.name, task.completed, task.id]);
  }
}

export default TaskRepository;
