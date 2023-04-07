const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Connect to DB using MONGODB_URL
const dbConn = async () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = dbConn;
