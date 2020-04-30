const express = require("express");
const morgan = require("morgan");
const app = express();
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/user");
const models = require("./models");
const { db } = require("./models");
db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public/stylesheets"));
app.use(express.urlencoded({ extended: false }));
app.use("/wiki", wikiRouter);

app.get("/", (req, res) => res.send("Hello World!"));

const port = 1337;
models.db.sync({ force: true });

const init = async () => {
  await models.db.sync();
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
  });
};

init();
