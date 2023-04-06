const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

const PORT = 2000;

dotenv.config();

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});

// Connect to DB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
