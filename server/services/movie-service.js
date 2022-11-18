const { queryMovieById } = require("../db_controllers/movies-controllers");

const getMovie = async (req, res) => {
  const id = req.params.movieId;
  const movie = await queryMovieById(id);
  res.json({ status: 200, movie: movie });
};

module.exports = {
  getMovie,
};
