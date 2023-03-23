const validateQuery = (req, res, next) => {
  const { query } = req;

  if(query.year === undefined) {
    return res.status(400).json({ message: "The query parameter 'year' is required" });
  }

  if(query.year === '') {
    return res.status(400).json({ message: "The query parameter 'year' cannot be empty" });
  }

  next();
};

module.exports = {
  validateQuery,
}