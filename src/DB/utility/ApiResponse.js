class ApiResposne{
    constructor(statusCode=201,data,message,succcess=true){
        this.statusCode=statusCode
        this.data=data,
        this.message=message
        this.succcess=succcess

    }
}

module.exports=ApiResposne