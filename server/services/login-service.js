// adding bcrypt
const bcrypt = require("bcrypt");
const { getUserPassword } = require("../db_controllers/login-controllers");
//const saltRounds = 10;

// // hashpassword function
// const hashPassword = async (password) => {
//   const salt = await bcrypt.genSalt(saltRounds);
//   const hash = await bcrypt.hash(password, salt);
//   return hash;
// };

// function to compare password and hashpassword
const compare = async (password, hashPassword) => {
  const res = await bcrypt.compare(password, hashPassword);
  return res;
};

//const result;
let isLoggedIn = false;

const authenticateUser = async (req, res) => {
  console.log(req.body);
  const inputPassword = req.body.password;
  let message;
  const email = req.body.email;
  let user = await getUserPassword(email);
  // getting hashed password from db
  //const dbPassword = user.password;
  if (user) {
    const comparisonResult = await compare(inputPassword, user.password);
    console.log(user);
    //if (!user || user.password !== inputPassword)
    if (!comparisonResult) {
      isLoggedIn = false;
      message =
        " Credentials do not match.  Please check your email or password.";
    } else {
      isLoggedIn = true;
      req.session.user = email;
      //console.log(req.session.user);
      message = "Login Success!";
    }
  } else {
    isLoggedIn = false;
    message =
      " Account doesn't exist.";
  }
  //const comparisonResult = await compare(inputPassword, user.password);
  //
  // console.log(user);
  // //if (!user || user.password !== inputPassword)
  // if (!user || !comparisonResult || user.password === null) {
  //   isLoggedIn = false;
  //   message =
  //     " Credentials do not match.  Please check your email or password.";
  // } else {
  //   isLoggedIn = true;
  //   req.session.user = email;
  //   //console.log(req.session.user);
  //   message = "Login Success!";
  // }

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
