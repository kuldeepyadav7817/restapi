const express = require("express");
const app = express();
const session = require("express-session");
const port = 3000;

// Middleware for JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session middleware
app.use(
  session({
    secret: "kuldeepyadav",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Route handler
app.get("/", (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`<h1>You've visited ${req.session.views} times</h1>`);
  } else {
    req.session.views = 1;
    res.send("Welcome! You are visiting for the first time.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
