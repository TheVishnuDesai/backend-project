// require('dotenv').config({path: './env'}) breaking consistency of code
import dotenv from 'dotenv' // improved version
import connectDB from "./db/index.js";
import { app } from './app.js';

//approch-2
connectDB()
.then(() => {
    const port = process.env.PORT || 7000
    app.on("error", (err) => {
        console.log("Error:", err);
        throw err
    })

    app.listen(port , () => {
        console.log(`server is running at port ${port}`);
        
    }) // port not found use 7000 or use one if deployed on the server 
    // when we put code on server, this thing save us from crash the server 
})
.catch((err) => {
    console.log("MongoDB connection failed !!!", err);
    
})

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