const express = require("express");

const { addToFavList, addToWishList } = require("../services/favlist-service");

const router = express.Router();

router.post("/fav", addToFavList);
router.post("/wish", addToWishList);
//router.get("/", getFavList);

module.exports = router;
