// Global error handler. Express recognizes this as an error handler because
// it takes FOUR arguments (err, req, res, next). It must be the last
// app.use() call in server.js so it catches errors from every route/middleware
// before it, including next(error) calls and unmatched-route 404s.

function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;

  console.error(`[ERROR] ${new Date().toISOString()} — ${statusCode} — ${err.message}`);

  res.status(statusCode).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
}

module.exports = errorHandler;