const { queryMovieByName } = require("../db_controllers/movies-controllers");

const queryMovie = (req, res) => {
  const name = req.params.name;
  const movie = queryMovieByName(name);
  res.json({ name: name, data: movie });
};

module.exports = {
  queryMovie,
};
