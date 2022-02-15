import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

//* middleware
app.use(cookieParser());
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "secret",
  })
);

//* basic endpoints
app.get("/", function (req, res) {
  res.send("Hello, I am the PRP backend (endpoint test)!");
});

app.get("/test", function (req, res) {
  res.send("This is a PRP test route");
});

app.listen(port, function () {
  console.log(`PRP Backend App listening on port ${port}!`);
});
