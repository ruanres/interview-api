const { movies } = require('../../mocked-data/movies.json');

const filterByYear = (movies, year) => movies.filter(movie => movie.year === year);

const getAll = (req, res) => {
  const { year } = req.query;
  const data = filterByYear(movies, year);
  return res.status(200).json({ data });
};

module.exports = {
  getAll,
}