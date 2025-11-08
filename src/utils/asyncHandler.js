// method-2 promise
const asyncHandler = (requestHandler)=>{
    (err,req, res, next) => {
        Promise.resolve(requestHandler(err,req, res, next))
        .catch((err)=> next(err))
    }
}



export default asyncHandler


// method-1 try-catch

// const asyncHandler = () => {}
// const asyncHandler = (fun) => () => {}
// const asyncHandler = (fun) => async () => {}

/* const asyncHandler = (fun) => async (err, req, res, next) => {
    try {
        await fun(err, req, res, next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}*/