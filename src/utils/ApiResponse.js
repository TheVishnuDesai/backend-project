class ApiResponse{
    constructor(statudCode, data, message="success"){
        this.statudCode = statudCode
        this.data = data
        this.message = message
        this.success = statudCode < 400
    }
}