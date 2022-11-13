const {
  createReview,
  getReviewByMovie,
  getReviewById,
  updateReviewById,
  deleteReviewById,
} = require("../db_controllers/review-controllers");

const postReview = (req, res) => {
  const review = req.body.review;
  const createdReview = createReview(review);
  res.json(createdReview);
};

const getReview = (req, res) => {
  const review = getReviewById(req.params.reviewId);
  res.json(review);
};

const getMovieReview = (req, res) => {
  const review = getReviewByMovie(req.params.movieId);
  res.json(review);
};

const updateReview = (req, res) => {
  const review = updateReviewById(req.body.review);
  res.json(updatedReview);
};

const deleteReview = (req, res) => {
  const message = deleteReviewById(req.params.reviewId);
  res.json(message);
};

module.exports = {
  postReview,
  getReview,
  getMovieReview,
  updateReview,
  deleteReview,
};
