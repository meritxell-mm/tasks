import express from 'express'
import TaskController from '../controllers/tasks/task.controller.js';

const router = express.Router();

router.get('/', TaskController.getTasks);
router.post('/', TaskController.newTask);
router.delete('/:taskID', TaskController.deleteTask);
router.put('/:taskID', TaskController.updateTask);

export default router