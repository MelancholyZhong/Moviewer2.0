const express = require("express");

const { queryMovie, getTops } = require("../services/query-service");

const router = express.Router();

router.get("/tops", getTops);

router.get("/:name", queryMovie);

module.exports = router;
