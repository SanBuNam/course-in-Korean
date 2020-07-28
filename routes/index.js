const express = require("express");
const router = express.Router();

// Do work here
router.get("/", (req, res) => {
  // res.send("Hey! It works!");
  res.render("hello", {
    name: "david",
    dog: req.query.dog,
  });
});

module.exports = router;