const {
  createReview,
  getReviewByMovie,
  getReviewById,
  updateReviewById,
  deleteReviewById,
} = require("../db_controllers/review-controllers");

const postReview = async (req, res) => {
  const review = {
    userId: req.body.userId,
    movieId: req.body.movieId,
    content: req.body.content,
  };
  const createdReview = await createReview(review);
  res.json(createdReview);
};

const getReview = async (req, res) => {
  const review = await getReviewById(req.params.reviewId);
  res.json(review);
};

const getMovieReview = async (req, res) => {
  const review = await getReviewByMovie(req.params.movieId);
  res.json({ status: 200, review: review });
};

const updateReview = async (req, res) => {
  const content = req.body.content;
  const updatedReview = await updateReviewById(req.params.reviewId, content);
  res.json(updatedReview);
};

const deleteReview = async (req, res) => {
  const message = await deleteReviewById(req.params.reviewId);
  res.json(message);
};

module.exports = {
  postReview,
  getReview,
  getMovieReview,
  updateReview,
  deleteReview,
};
