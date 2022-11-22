// Aaron Leung - Login controller retrieve user with corresponding email
const mongoUtil = require("../mongoUtil");

const getUserPassword = async (email) => {
  const database = mongoUtil.getDB();

  let user;
  try {
    user = await database.collection("users").findOne({ email: email });
  } catch (err) {
    res.status(500).send({ msg: err });
  }
  return user;
};

module.exports = { getUserPassword };
