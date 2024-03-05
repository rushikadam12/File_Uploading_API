require("dotenv").config();
const express = require("express");
const connectDB = require('./src/DB/DB');
const exmapleRoutes=require('./src/DB/routes/exampleRoutes')

const app = express();
app.use(express.json());

app.use("/api/v1/",exmapleRoutes);





// connectDB().then(() => {
//   app.listen(process.env.PORT || process.env.NORMAL_PORT, () => {
//       console.log("Server is live!");
//     })
//     .catch((error) => {
//       console.log("connection failed",error)
//     });
// });

app.listen(3000,(req,res)=>{
  console.log("Server is online")
  
})