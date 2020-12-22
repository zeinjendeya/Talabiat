const express = require("express");
const { join } = require("path");

const cookieParser = require("cookie-parser");

const router = require("./router");
const { verifyToken } = require("./src/utils/index");

const app = express();

app.set("port", 5000);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());



app.use((req, res, next) => {
  verifyToken(req.cookies.token)
    .then(() => {
      express.static(join(__dirname,"..", "static", "private"))(req, res, next);
    })
    .catch(() => {
      express.static(join(__dirname, "..","static", "public"))(req, res, next);
    });
});

app.use(express.static(join(__dirname, "..","static", "general")));


app.use(router);

app.get("*", (req, res) => {
  res.status(404).send("<p>page not found</p>");
});

module.exports = app;
