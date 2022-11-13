const mongoUtil = require("../mongoUtil");

const DUMMY_REVIEWS = [
  {
    id: "192823",
    userId: "112344",
    movieId: "889988",
    content: "I like shining",
  },
];

const createReview = (review) => {
  return DUMMY_REVIEWS[0];
};

const getReviewByMovie = (movie) => {
  return DUMMY_REVIEWS;
};

const getReviewById = (id) => {
  return DUMMY_REVIEWS[0];
};

const updateReviewById = (review) => {
  return DUMMY_REVIEWS[0];
};

const deleteReviewById = (id) => {
  return `deleted one review from ${DUMMY_REVIEWS[0].userId}`;
};

module.exports = {
  createReview,
  getReviewByMovie,
  getReviewById,
  updateReviewById,
  deleteReviewById,
};
