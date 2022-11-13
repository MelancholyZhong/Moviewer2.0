const express = require("express");
const bodyParser = require("body-parser");
const mongoUtil = require("./mongoUtil");

const app = express();
const port = 3001;

const queryRoutes = require("./routes/query-routes");

mongoUtil.connectToClient();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/query", queryRoutes);

app.listen(port, () => {
  console.log(`Server runing at port ${port}`);
});

module.exports = app;
