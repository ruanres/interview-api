const { movies } = require('../../mocked-data/movies.json');
const NotFoundError = require('../errors/NotFoundError');

const filterByYear = (movies, year) => movies.filter(movie => movie.year === year);
const filterById = (movies, id) => movies.filter(movie => movie.id === id);

const getAll = (req, res) => {
  const { year } = req.query;
  const data = filterByYear(movies, year);
  return res.status(200).json({ data });
};

const getById = (req, res) => {
  const { id } = req.params;
  const data = filterById(movies, id);

  if(data.length === 0) {
    throw new NotFoundError('Movie not found');
  }

  return res.status(200).json({ data });
}

module.exports = {
  getAll,
  getById,
}