const { queryMovieByName } = require("../db_controllers/movies-controllers");

const queryMovie = async (req, res) => {
  const name = req.params.name;
  const movie = await queryMovieByName(name);
  res.json({ name: name, data: movie });
};

module.exports = {
  queryMovie,
};
