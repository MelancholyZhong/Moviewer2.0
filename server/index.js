const express = require("express");
const bodyParser = require("body-parser");
const mongoUtil = require("./mongoUtil");
// Added today
const cookieParser = require("cookie-parser");
const passport = require("passport");

const app = express();
const port = 3001;

const queryRoutes = require("./routes/query-routes");
const movieRoutes = require("./routes/movie-routes");
const reviewRoutes = require("./routes/review-routes");
const loginRoutes = require("./routes/login-routes");
// Added today
const authRoutes = require("./routes/auth");

mongoUtil.connectToClient();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Added today
app.use(cookieParser());

app.use("/api/query", queryRoutes);
app.use("/api/movie", movieRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/login", loginRoutes);
// Added today
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server runing at port ${port}`);
});

module.exports = app;
