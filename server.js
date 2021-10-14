const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middlewares
app.use(express.static("dist"));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

// start express server on port 4000
app.listen(4000, () => {
  console.log("server started on port 4000");
});
