const mongoUtil = require("../mongoUtil");

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
  },
];

const queryMovieByName = (movie) => {
  return DUMMY_MOVIES[0];
};

module.exports = { queryMovieByName };
