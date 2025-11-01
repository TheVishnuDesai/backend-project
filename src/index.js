// require('dotenv').config({path: './env'}) breaking consistency of code
import dotenv from 'dotenv' // improved version
import connectDB from "./db/index.js";

//approch-2
connectDB()
/*const app = express()

//approch-1
 ;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // listeners
        app.on("error", (error) =>{
            console.log("Error:", error);
            throw error
        }) 
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})() */