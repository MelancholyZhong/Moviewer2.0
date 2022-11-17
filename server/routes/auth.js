const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const db = require("../db");

// added today
const router = express.Router();
// adding strategy
// verify call by passport each time you try to authenticate
const strategy = new new LocalStrategy(function verify(email, password, cb) {
  console.log("verify", email, password);
  // TODO database code goes in here
  // check in database is email exists
  // if email does exist, is password the right one
  const user = {
    email: "test@test.com",
    password: "test123",
  };

  // authentication is successful
  // first parameter that cb takes is error so if error is null -> means no errors
  // second parameter is the current authenticated user
  return cb(null, email);
})();

passport.use(strategy);

// convert from object into cookie
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

// router.post("/login/password", (req, res) => {
//   console.log("login/password", req.body);
//   // TODO authenticate

//   res.redirect("/");
// });

// replace top with
router.post(
  "/login/password",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

router.get("/getCurrentUser", (req, res) => {
  console.log("get user", req.session.user);
  req.sessionID(req.session.user);
});
//module.exports = router;
// passport.use(
//   new LocalStrategy(function verify(username, password, cb) {
//     db.get(
//       "SELECT * FROM users WHERE username = ?",
//       [username],
//       function (err, row) {
//         if (err) {
//           return cb(err);
//         }
//         if (!row) {
//           return cb(null, false, {
//             message: "Incorrect username or password.",
//           });
//         }

//         crypto.pbkdf2(
//           password,
//           row.salt,
//           310000,
//           32,
//           "sha256",
//           function (err, hashedPassword) {
//             if (err) {
//               return cb(err);
//             }
//             if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
//               return cb(null, false, {
//                 message: "Incorrect username or password.",
//               });
//             }
//             return cb(null, row);
//           }
//         );
//       }
//     );
//   })
// );

module.exports = router;
