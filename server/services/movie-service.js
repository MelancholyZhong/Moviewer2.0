const { queryMovieById } = require("../db_controllers/movies-controllers");

const getMovie = (req, res) => {
  const id = req.params.movieId;
  const movie = queryMovieById(id);
  res.json({ id: id, data: movie });
};

module.exports = {
  getMovie,
};
