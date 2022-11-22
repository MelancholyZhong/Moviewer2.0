const express = require("express");

const {
  addToFavList,
  addToWishList,
  getLists,
  removeFromFavList,
  removeFromWishList
} = require("../services/favlist-service");

const router = express.Router();

router.post("/fav", addToFavList);
router.post("/wish", addToWishList);
router.get("/:userId", getLists);
router.post("/removeFav", removeFromFavList);
router.post("/removeWish", removeFromWishList);

module.exports = router;
