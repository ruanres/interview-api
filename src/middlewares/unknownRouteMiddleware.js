const NotFoundError = require('../errors/NotFoundError');

const unknownRouteMiddleware = (req, res) => {
  throw new NotFoundError('Page not found');
}

module.exports = unknownRouteMiddleware;