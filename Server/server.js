const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
const mongoose = require("mongoose");

//Routes
// mongoose.Promise = global.Promise;
const api = require("./routes/api");
app.use("/api", api);

app.use(bodyParser.json());

//Server Running Port
app.listen(3000, function () {
  console.log("server running in 3000 ");
});
