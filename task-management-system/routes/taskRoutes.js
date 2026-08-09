const express = require('express');
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const router = express.Router();

router.get('/', getAllTasks);       // Read all
router.get('/:id', getTaskById);    // Read one
router.post('/', createTask);       // Create
router.put('/:id', updateTask);     // Update
router.delete('/:id', deleteTask);  // Delete

module.exports = router;