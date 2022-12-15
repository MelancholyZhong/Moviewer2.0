const mongoUtil = require("../mongoUtil");
const { ObjectId } = require("mongodb");
// We didn't have a search function, so I learnt a lot by this process.
// You have very clear structure: passing the query from front end to routes, and a query-service file to get response from DB. 
const queryMovieByName = async (movie) => {
  const database = mongoUtil.getDB();
  const keyWords = movie.split(" ");
  // The regex way is powerful. 
  const regex = keyWords.join(".*");
  const query = { Name: { $regex: regex, $options: "si" } };
  let foundMovie;
  try {
    foundMovie = await database
      .collection("movies")
      .find(query)
      .limit(10)
      .toArray();
  } catch (err) {
    res.status(500).send({ msg: err });
  }

  return foundMovie;
};

const queryMovieById = async (id) => {
  const database = mongoUtil.getDB();
  const query = { _id: ObjectId(id) };
  let foundMovie;
  try {
    foundMovie = await database.collection("movies").findOne(query);
  } catch (err) {
    res.status(500).send({ msg: err });
  }

  return foundMovie;
};

const queryTops = async () => {
  const database = mongoUtil.getDB();
  try {
    const movies = await database.collection("movies");
    const tops = await movies
      .find()
      .sort({ RatingValue: -1 })
      .limit(10)
      .toArray();
    return tops;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { queryMovieByName, queryMovieById, queryTops };
