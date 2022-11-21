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

// const getFavList = async(userId) => {
//   const database = mongoUtil.getDB();
//   if(!req.session.user) {
//     const favList = await database.collection("favorites");
//   }
// }

// get favorites list by usedId -> you can get `favorites` array in here
// ["id1", "id2"] -> for loop -> find the movie detail by "id"
// [{object1}, {object2}]




module.exports = { pushNewFav };
