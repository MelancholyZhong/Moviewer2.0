const express = require("express");

const { getMovie } = require("../services/movie-service");

const router = express.Router();

router.get("/:movieId", getMovie);

module.exports = router;
