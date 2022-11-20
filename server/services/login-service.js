const { getUserPassword } = require("../db_controllers/login-controllers");

let isLoggedIn = false;

const authenticateUser = async (req, res) => {
  console.log(req.body);
  const inputPassword = req.body.password;
  let message;
  const email = req.body.email;
  let user = await getUserPassword(email);
  console.log(user);
  if (!user || user.password !== inputPassword) {
    isLoggedIn = false;
    message =
      " Credentials do not match.  Please check your email or password.";
  } else {
    isLoggedIn = true;
    req.session.user = email;
    //console.log(req.session.user);
    message = "Login Success!";
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
