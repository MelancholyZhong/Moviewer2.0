const { pushNewFav } = require("../db_controllers/favlist-controllers");

const addToFavList = async (req, res) => {
  const { userId, movieId } = req.body;
  pushNewFav("favorites", userId, movieId);
  res.status(200).json({ message: "added to fav list" });
};

const addToWishList = async (req, res) => {
  const { userId, movieId } = req.body;
  pushNewFav("wish", userId, movieId);
  res.status(200).json({ message: "added to wish list" });
};

// const getFavList = async (req, res) => {
//   const { userId } = req.body;
//   const favoriteList = 
// }
module.exports = { addToFavList, addToWishList };
