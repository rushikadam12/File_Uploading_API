require("dotenv").config();
const express = require("express");
const connectDB = require('./src/DB/DB');
const exmapleRoutes=require('./src/DB/routes/exampleRoutes')
const cors=require('cors')
const app = express();
app.use(cors({
  origin: "*",
  credentials:false
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api/v1/", exmapleRoutes);




// connectDB().then(() => {
//   app.listen(process.env.PORT || process.env.NORMAL_PORT, () => {
//       console.log("Server is live!");
//     })
//     .catch((error) => {
//       console.log("connection failed",error)
//     });
// });

app.listen(5101,(req,res)=>{
  console.log("Server is online")
  
})