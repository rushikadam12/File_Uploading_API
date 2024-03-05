const express=require('express')
const router=express.Router();
const exampleController=require('../controller/exampleController')

router.route("/").get(exampleController)

module.exports=router