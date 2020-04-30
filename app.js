const express = require("express");
const morgan = require("morgan");
const app = express();
const { db } = require("./models");
db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public/stylesheets"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Hello World!"));

const port = 1337;
app.listen(port, () => console.log(`App listening in port ${port}`));
