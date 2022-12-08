const {
  queryMovieByName,
  queryTops,
} = require("../db_controllers/movies-controllers");

const queryMovie = async (req, res) => {
  const name = req.params.name;
  const movies = await queryMovieByName(name);
  if (movies === null || movies.length === 0) {
    res.json({ status: 404 });
  } else {
    res.json({ status: 200, movies: movies });
  }
};

const getTops = async (req, res) => {
  const tops = await queryTops();
  res.json({ status: 200, tops: tops });
};
module.exports = {
  queryMovie,
  getTops,
};
