const router = require("express").Router();
const { register } = require("./controllers/register");
const { login } = require("./controllers/login");

router.get("/", (req, res) => {
  res.send("We are on home");
});

router.post("/register", register);
router.post("/login", login);

module.exports = router;
