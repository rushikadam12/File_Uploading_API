require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectdb = await mongoose.connect(process.env.URI);
    console.log("Database is online");
    console.log(connectdb);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }finally{
    await mongoose.disconnect();
  }
};
module.exports = connectDB;
