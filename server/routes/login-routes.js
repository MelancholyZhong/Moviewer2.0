const express = require("express");

const {
  authenticateUser,
  currentUser,
  logout,
} = require("../services/login-service");

const router = express.Router();

router.post("/", authenticateUser);

router.get("/", currentUser);

router.get("/logout", logout);

module.exports = router;
