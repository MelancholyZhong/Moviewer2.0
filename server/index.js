const express = require("express");
const bodyParser = require("body-parser");
const mongoUtil = require("./mongoUtil");
const path = require("path");
const session = require("express-session");

const app = express();
const port = 3001;

app.use(
  session({
    secret: "v me 50",
    resave: false,
    saveUninitialized: true,
  })
);

const queryRoutes = require("./routes/query-routes");
const movieRoutes = require("./routes/movie-routes");
const reviewRoutes = require("./routes/review-routes");
const loginRoutes = require("./routes/login-routes");
const listRoutes = require("./routes/list-routes");
const registerRoutes = require("./routes/register-routes");

mongoUtil.connectToClient();

app.use(express.static(path.join(__dirname, "frontend/build")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/api/query", queryRoutes);
app.use("/api/movie", movieRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/register", registerRoutes);
app.use("/api/list", listRoutes);

//
app.listen(port, () => {
  console.log(`Server runing at port ${port}`);
});

module.exports = app;
