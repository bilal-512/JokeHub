const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.DB_API, {

    });
    console.log(" MongoDB connected");
  } catch (error) {
    console.error(" MongoDB connection error:", error);
  }
};

module.exports = connection;
