const mongoUtil = require("../mongoUtil");
const ObjectId = require("mongodb").ObjectId;

const DUMMY_MOVIES = [
  {
    id: "0000",
    img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/21/09/the-shining-2.jpg?quality=75&width=1200&auto=webp",
    title: "The Shining",
    year: "1980",
    director: "Stanley Kubrick",
    star: "Jack Nicholson, Shelley Duvall, Scatman Crothers, Danny Lloyd",
    region: "United States, United Kingdom",
    genre: "psychological horror",
    rate: 9.2,
  },
];

const queryMovieByName = async (movie) => {
  const database = mongoUtil.getDB();
  const query = { Name: movie };
  let foundMovie;
  try {
    foundMovie = await database.collection("movies").findOne(query);
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

module.exports = { queryMovieByName, queryMovieById };
