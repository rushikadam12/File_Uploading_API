class ApiError extends Error{
    constructor(statusCode,message="somthing went wrong with server",errors=[],stack=""){
        super(message)
        this.statusCode=statusCode
        this.message=message
        this.success=false
        this.data=null
        this.errors=errors
        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructer)
        }
        // console.log(statusCode,message,this.success,this.data,this.errors)
    }
   
}
module.exports=ApiError