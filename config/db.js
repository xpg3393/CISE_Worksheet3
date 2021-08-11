const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const path = require("path");
const express = require("express");
require("dotenv").config();

const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.static(path.resolve(__dirname, "./worksheet3/build")));

app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "./worksheet3/build", "index.html"));
});

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
