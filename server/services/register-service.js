// Aaron Leung
const { registerUser } = require("../db_controllers/register-controllers");

let isCreated = false;

const signUp = async (req, res) => {
  let message;
  let result = await registerUser(req.body);
  if (result) {
    isCreated = true;
    message = "Account successfully created!  Redirecting to login";
  } else {
    isCreated = false;
    message = "Account with email already exists";
  }
  res.json({ isCreated: isCreated, message: message });
};

module.exports = {
  signUp,
};
