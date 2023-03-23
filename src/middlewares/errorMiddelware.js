const errorMiddleware = (error, req, res, next) => {
  const { name, message } = error;
  const data = { error: message };
  switch (name) {
    case 'ValidationError':
      res.status(400).send(data);
      break;
    case 'AuthorizationError':
      res.status(401).send(data);
      break;
    case 'ForbiddenError':
      res.status(403).send(data);
      break;
    case 'NotFoundError':
      res.status(404).send(data);
      break;
    default:
      res.status(500).send(error);
  }
  next(error);
};

module.exports = errorMiddleware;
