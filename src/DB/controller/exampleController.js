const asyncHandler=require('../utility/asyncHandler')
const ApiError=require('../utility/ApiError')
const ApiResponse=require('../utility/ApiResponse')

const exampleController=asyncHandler(async(req,res)=>{
       const {password,username}=req.body;
       if(!password||!username){
        throw new ApiError(401,"pls fill all the feild")
       }else{
              res.send(new ApiResponse(201,{password,username},"request successfully completed"))
       }

})

module.exports=exampleController