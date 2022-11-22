const {
  pushNewFav,
  getList,
  removeMovie,
} = require("../db_controllers/favlist-controllers");

const addToFavList = async (req, res) => {
  const { userId, movieId } = req.body;
  await pushNewFav("favorites", userId, movieId);
  res.status(200).json({ message: "added to fav list" });
};

const addToWishList = async (req, res) => {
  const { userId, movieId } = req.body;
  await pushNewFav("wish", userId, movieId);
  res.status(200).json({ message: "added to wish list" });
};

const removeFromFavList = async (req, res) => {
  const {userId, movieId } = req.body;
  await removeMovie("favorites", userId, movieId);
  res.json({message: "removed from fav list"});
};

const removeFromWishList = async (req, res) => {
  const {userId, movieId } = req.body;
  await removeMovie("wish", userId, movieId);
  res.json({message: "removed from wish list"});
};

const getLists = async (req, res) => {
  const userId = req.params.userId;
  const favList = await getList("favorites", userId);
  const wishList = await getList("wish", userId);

  res.status(200).json({ favList: favList, wishList: wishList });
};

module.exports = { addToFavList, addToWishList, getLists, removeFromFavList, removeFromWishList };
