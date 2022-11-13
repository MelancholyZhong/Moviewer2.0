const express = require("express");

const { queryMovie } = require("../services/query-service");

const router = express.Router();

router.get("/", queryMovie);

module.exports = router;
