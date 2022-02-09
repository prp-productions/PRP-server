import express from "express";

const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello, I am the PRP backend!");
});

app.get("/test-route", function (req, res) {
  res.send("This is a PRP test route");
});

app.listen(port, function () {
  console.log(`PRP Backend App listening on port ${port}!`);
});
