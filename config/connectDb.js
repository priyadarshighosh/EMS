const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://subbse:ZnXeLm8yzS7yCTPw@weather.pnfru.mongodb.net/');
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Connection error:", error);
    process.exit(1); // stop server if DB connection fails
  }
};

module.exports = connectDb;
