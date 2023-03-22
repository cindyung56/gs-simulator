const express = require("express");
const path = require("path");
const sqDB = require("./config/connection");
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

sqDB.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log("Now listening to server http://localhost:3001")
  );
});
