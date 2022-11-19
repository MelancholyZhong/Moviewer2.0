const express = require("express");

const { authenticateUser } = require("../services/login-service");

const router = express.Router();

router.post("/", authenticateUser);

//router.get("/", authenticateUser);

module.exports = router;
