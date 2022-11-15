const express = require("express");

const { queryMovie } = require("../services/query-service");

const router = express.Router();

router.get("/:name", queryMovie);

module.exports = router;
