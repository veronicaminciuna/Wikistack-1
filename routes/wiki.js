const express = require("express");
const router = require("router");
const { addPage } = require("../views");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/user");
const models = require("./models");

router.get("/add", (req, res) => {
  res.send(addPage());
});

router.get("/", (req, res, next) => {
  res.send("got to GET /wiki/");
});

router.post("/", (req, res, next) => {
  res.send("got to POST /wiki/");
});

router.get("/add", (req, res, next) => {
  res.send("got to GET /wiki/add");
});
