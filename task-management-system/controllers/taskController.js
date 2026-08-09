const { tasks, getNextId } = require('../data/tasks');

// GET /api/tasks — 200 on success
function getAllTasks(req, res) {
  res.status(200).json({ success: true, count: tasks.length, data: tasks });
}

// GET /api/tasks/:id — 200 on success, 404 if not found
function getTaskById(req, res, next) {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    const error = new Error(`Task with id ${id} not found`);
    error.statusCode = 404;
    return next(error);
  }

  res.status(200).json({ success: true, data: task });
}

// POST /api/tasks — 201 on creation, 400 if validation fails
function createTask(req, res, next) {
  const { title, description } = req.body || {};

  if (!title || typeof title !== 'string' || title.trim() === '') {
    const error = new Error('Task title is required and must be a non-empty string');
    error.statusCode = 400;
    return next(error);
  }

  const newTask = {
    id: getNextId(),
    title: title.trim(),
    description: description ? String(description).trim() : '',
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  res.status(201).json({ success: true, data: newTask });
}

// PUT /api/tasks/:id — 200 on success, 404 if not found, 400 on bad input
function updateTask(req, res, next) {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    const error = new Error(`Task with id ${id} not found`);
    error.statusCode = 404;
    return next(error);
  }

  const { title, description, completed } = req.body || {};

  if (title !== undefined) {
    if (typeof title !== 'string' || title.trim() === '') {
      const error = new Error('Task title must be a non-empty string');
      error.statusCode = 400;
      return next(error);
    }
    task.title = title.trim();
  }

  if (description !== undefined) {
    task.description = String(description).trim();
  }

  if (completed !== undefined) {
    if (typeof completed !== 'boolean') {
      const error = new Error('completed must be a boolean');
      error.statusCode = 400;
      return next(error);
    }
    task.completed = completed;
  }

  task.updatedAt = new Date().toISOString();

  res.status(200).json({ success: true, data: task });
}

// DELETE /api/tasks/:id — 200 on success, 404 if not found
function deleteTask(req, res, next) {
  const id = Number(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    const error = new Error(`Task with id ${id} not found`);
    error.statusCode = 404;
    return next(error);
  }

  const [deletedTask] = tasks.splice(index, 1);
  res.status(200).json({ success: true, data: deletedTask });
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};