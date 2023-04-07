const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      bcrypt
        .compare(password, user.password)
        .then((isMatch) => {
          if (isMatch) {
            const token = jwt.sign(
              { _id: user._id, email: user.email },
              "RANDOM_TOKEN",
              { expiresIn: "6h" }
            );
            res
              .status(200)
              .send({ message: "Login successful", email: user.email, token });
          } else {
            res.status(400).send({ message: "Invalid credentials" });
          }
        })
        .catch((err) => {
          res.status(400).send({ message: "Invalid credentials", err });
        });
    })
    .catch((err) => {
      res.status(404).send({ message: "User not found", err });
    });
};

module.exports = { login };
