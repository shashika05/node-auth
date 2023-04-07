const User = require("../model/userModel");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  // Object destructuring
  const { name, email, password } = req.body;
  // Check if user already exists
  User.findOne({ email: email }).then(async (user) => {
    if (user) {
      // If user exists, send error message
      res.status(400).send({
        message: "Email already exists",
      });
    } else {
      // If user does not exist, create user
      const user = await User.create({
        name: name,
        email: email,
        // Hash the password using bcrypt
        password: await bcrypt.hash(password, 10),
      });
      // Save the user
      user
        .save()
        .then((result) => {
          // If user is saved successfully, send success message
          res.status(201).send({
            message: "User created successfully",
            result,
          });
        })
        .catch((err) => {
          // If user is not saved successfully, send error message
          res.status(400).send({
            message: "User not created",
            err,
          });
        });
    }
  });
};

module.exports = { register };
