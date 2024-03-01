require("dotenv").config();
const express = require("express");
const connectDB = require('./src/DB/DB');

const app = express();
app.use(express.json());





connectDB().then(() => {
  app.listen(process.env.PORT || process.env.NORMAL_PORT, () => {
      console.log("Server is live!");
    })
    .catch((error) => {
      console.log("connection failed",error)
    });
});
