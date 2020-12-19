const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const error = err.msg || "something went wrong";

  res.status(status).json({ status, error });
};
module.exports = errorHandler;
