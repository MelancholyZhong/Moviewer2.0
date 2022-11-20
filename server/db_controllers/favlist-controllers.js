const mongoUtil = require("../mongoUtil");

const pushNewFav = async (listName, userId, movieId) => {
  const database = mongoUtil.getDB();
  const query = { userId: userId };
  try {
    const favList = await database.collection(listName);
    const user = await favList.findOne(query);
    if (!user) {
      favList.insertOne({
        userId: userId,
        favorites: [],
      });
    }
    favList.updateOne(query, { $push: { favorites: movieId } });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { pushNewFav };
