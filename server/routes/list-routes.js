const express = require("express");

const {
  addToFavList,
  addToWishList,
  getLists,
} = require("../services/favlist-service");

const router = express.Router();

router.post("/fav", addToFavList);
router.post("/wish", addToWishList);
router.get("/:userId", getLists);

module.exports = router;
