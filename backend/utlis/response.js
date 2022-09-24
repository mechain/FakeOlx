class Response {
    constructor(statusCode , error , message , data){
        (this.statusCode = statusCode),
        (this.error = error),
        (this.message = message),
        (this.data = data)
    }
}
module.exports = Response;