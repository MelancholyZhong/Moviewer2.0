const express = require("express");

const { addToFavList, addToWishList } = require("../services/favlist-service");

const router = express.Router();

router.post("/fav", addToFavList);
router.post("/wish", addToWishList);

module.exports = router;
