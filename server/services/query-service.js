const { queryMovieByName } = require("../db_controllers/movies-controllers");

const queryMovie = (req, res) => {
  const { name } = req.body;
  const movie = queryMovieByName(name);
  res.json({ data: movie });
};

module.exports = {
  queryMovie,
};
