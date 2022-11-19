const express = require("express");

const { signUp } = require("../services/register-service");

const router = express.Router();

router.post("/", signUp );

module.exports = router;
