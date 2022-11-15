const express = require("express");

const {
  postReview,
  getReview,
  getMovieReview,
  updateReview,
  deleteReview,
} = require("../services/review-service");

const router = express.Router();

router.post("/", postReview);

router.get("/movie/:movieId", getMovieReview);

router.get("/:reviewId", getReview);

router.patch("/:reviewId", updateReview);

router.delete("/:reviewId", deleteReview);

module.exports = router;
