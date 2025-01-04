import express from 'express'
import taskRouter from './task.router.js'

const router = express.Router();

router.use('/tasks', taskRouter)

export default router