const User = require("../model/userModel");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email: email }).then(async (user) => {
    if (user) {
      res.status(400).send({
        message: "Email already exists",
      });
    } else {
      const user = await User.create({
        name: name,
        email: email,
        password: await bcrypt.hash(password, 10),
      });

      user
        .save()
        .then((result) => {
          res.status(201).send({
            message: "User created successfully",
            result,
          });
        })
        .catch((err) => {
          res.status(400).send({
            message: "User not created",
            err,
          });
        });
    }
  });
};

module.exports = { register };
