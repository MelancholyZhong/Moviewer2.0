// Aaron Leung 
// using bcrypt for password encryption
const bcrypt = require("bcrypt");
const { getUserPassword } = require("../db_controllers/login-controllers");

// function to compare password and hashpassword
const compare = async (password, hashPassword) => {
  const res = await bcrypt.compare(password, hashPassword);
  return res;
};

let isLoggedIn = false;

const authenticateUser = async (req, res) => {
  console.log(req.body);
  const inputPassword = req.body.password;
  let message;
  const email = req.body.email;
  let user = await getUserPassword(email);
  // getting hashed password from db
  if (user) {
    // check if password match
    const comparisonResult = await compare(inputPassword, user.password);
    console.log(user);
    if (!comparisonResult) {
      isLoggedIn = false;
      message =
        " Credentials do not match.  Please check your email or password.";
    } else {
      isLoggedIn = true;
      req.session.user = email;
      message = "Login Success!";
    }
  } else {
    isLoggedIn = false;
    message =
      " Account doesn't exist.";
  }
  res.json({ isLoggedIn: isLoggedIn, message: message });
};

const currentUser = (req, res) => {
  if (!req.session.user) {
    res.json({ status: 404 });
  } else {
    res.json({ status: 200, user: req.session.user });
  }
};

const logout = (req, res) => {
  req.session.user = null;
  res.json({ status: 200, message: "Success fully logged out!" });
};

module.exports = {
  authenticateUser,
  currentUser,
  logout,
};
