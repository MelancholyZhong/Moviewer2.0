const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { getUserPassword } = require("../db_controllers/login-controllers");

const router = express.Router();

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true,
      session: false,
    },
    async (req, username, password, cb) => {
      const user = await getUserPassword(req.body.email);
      if (user.password == req.body.password) {
        return cb(null, user);
      } else {
        return cb(null, false);
      }
    }
  )
);

// passport.serializeUser((user, cb) => {
//   process.nextTick(function () {
//     cb(null, { id: user.id, username: user.username });
//   });
// });

passport.serializeUser((user, cb) => {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser((user, cb) => {
  process.nextTick(function () {
    console.log(user);
    return cb(null, user);
  });
});

router.post("/", passport.authenticate("local"), (req, res) => {
  console.log("success");
  res.json({ status: 200 });
});

router.get("/");

module.exports = router;
