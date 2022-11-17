const express = require("express");

const loginControllers = require("../db_controllers/login-controllers");

const router = express.Router();

router.post("/", loginControllers.authenticateUser);

router.get("/", loginControllers.loginStatus);

module.exports = router;
