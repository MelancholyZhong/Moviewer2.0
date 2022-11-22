const {
  queryMovieByName,
  queryTops,
} = require("../db_controllers/movies-controllers");

const queryMovie = async (req, res) => {
  const name = req.params.name;
  const movie = await queryMovieByName(name);
  if (movie === null) {
    res.json({ status: 404 });
  } else {
    res.json({ status: 200, movie: movie });
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
