const express = require('express');
const requestLogger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON request bodies
app.use(express.json());

// Request logging middleware — runs for every incoming request
app.use(requestLogger);

// Health check
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Task Management API is running' });
});

// Task CRUD routes
app.use('/api/tasks', taskRoutes);

// Catch-all for unmatched routes — forwards a 404 error to the error handler
app.use((req, res, next) => {
  const error = new Error(`Route not found: ${req.method} ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
});

// Global error handling middleware — MUST be registered last
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});