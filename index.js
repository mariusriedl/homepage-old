const express = require("express");

const app = express();
const PORT = 8080;

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.redirect("pages/home/index.html");
});

app.listen(PORT, () => {
  console.log("Listening on :8080");
});
