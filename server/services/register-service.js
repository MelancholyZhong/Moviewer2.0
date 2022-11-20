const { registerUser } = require("../db_controllers/register-controllers");

let isCreated = false;

const signUp = async (req, res) => {
  console.log(req.body);
  //const inputPassword = req.body.password;
  let message;
  //const email = req.body.email;
  let result = await registerUser(req.body);
  console.log("//");
  console.log(result);
  if (result) {
    isCreated = true;
    message = "Account successfully created!  Redirecting to login";
  } else {
    isCreated = false;
    message = "Account with email already exists";
  }
  res.json({ isCreated: isCreated, message: message });
  //   console.log(user);
  //   if (!user || user.password !== inputPassword) {
  //     isLoggedIn = false;
  //     message = " Credentials do not match.  Please check your email or password";
  //   } else {
  //     isLoggedIn = true;
  //     message = "Login Success!";
  //   }

  //   res.json({ isLoggedIn: isLoggedIn, message: message });
};

module.exports = {
  signUp,
};
