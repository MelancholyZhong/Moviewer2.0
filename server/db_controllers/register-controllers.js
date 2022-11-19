const mongoUtil = require("../mongoUtil");

const registerUser = async (req, res) => {
  const database = mongoUtil.getDB();
  const email = req.email;
  const fname = req.fname;
  const lname = req.lname;
  const password = req.password;

  const userExist = await database
    .collection("users")
    .findOne({ email: email });
  let accountCreated;
  let message;
  if (!userExist) {
    database.collection("users").insertOne({
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    });
    message = "Account created!";
    accountCreated = true;
  } else {
    message = "User already exists!";
    accountCreated = false;
  }
  console.log(message);
  return accountCreated;
};

module.exports = { registerUser };
