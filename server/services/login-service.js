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
    message = " Credentials do not match.  Please check your email or password.";
  } else {
    isLoggedIn = true;
    req.session.user = { user: email};
    //console.log(req.session.user);
    message = "Login Success!";
  }

  res.json({ isLoggedIn: isLoggedIn, message: message });
};

module.exports = {
  authenticateUser,
};
