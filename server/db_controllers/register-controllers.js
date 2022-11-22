// Aaron Leung
const mongoUtil = require("../mongoUtil");
const bcrypt = require ("bcrypt");
const saltRounds = 10;

// Use bcrypt to hash password
// source: https://www.npmjs.com/package/bcrypt 
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

// store encrypted password to the database
const registerUser = async (req) => {
  const database = mongoUtil.getDB();
  const email = req.email;
  const fname = req.fname;
  const lname = req.lname;
  const password = req.password;
  const hashedPassword = await hashPassword(password);

  // Check if user exist, if doesn't exist insert into database
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
      password: hashedPassword,
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
