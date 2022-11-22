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
        list: [],
      });
    }
    favList.updateOne(query, { $push: { list: movieId } });
  } catch (err) {
    console.log(err);
  }
};

const getList = async (listName, userId) => {
  const database = mongoUtil.getDB();
  const query = { userId: userId };
  try {
    const user = await database.collection(listName).findOne(query);
    let list = user.list;
    if (!user) {
      list = [];
    }
    return list;
  } catch (err) {
    console.log(err);
  }
};

// Aaron Leung
const removeMovie = async (listName, userId, movieId) => {
  const database = mongoUtil.getDB();
  const query = { userId: userId };
  try {
    const list = await database.collection(listName);
    await list.updateOne(query, { $pull: { list: movieId } });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { pushNewFav, getList, removeMovie };
