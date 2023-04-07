const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const router = require("./router");
const dbConn = require("./dbConn");

const app = express();

const PORT = 2000;

dotenv.config();

app.listen(PORT, async () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

// Connect to DB
dbConn();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
