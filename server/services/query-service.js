const { queryMovieByName } = require("../db_controllers/movies-controllers");

const queryMovie = async (req, res) => {
  const name = req.params.name;
  const movie = await queryMovieByName(name);
  if (movie === null) {
    res.json({ status: 404 });
  } else {
    res.json({ status: 200, movie: movie });
  }
};

module.exports = {
  queryMovie,
};
