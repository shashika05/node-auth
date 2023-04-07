const router = require("express").Router();

// import Auth Controllers
const { register } = require("./controllers/register");
const { login } = require("./controllers/login");

// Routes

// Home route
router.get("/", (req, res) => {
  res.send("We are on home");
});

// Register user route
router.post("/register", register);

// Login user route
router.post("/login", login);

module.exports = router;
