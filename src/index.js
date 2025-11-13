// require('dotenv').config({path: './env'}) breaking consistency of code


import dotenv from 'dotenv' // improved version
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path: './env'
})

connectDB()
.then(() =>{
    app.on("error", (err) => {
        console.log("Error", err);
        throw err
    })
    const port = process.env.PORT
    app.listen(port || 8000, ()=>{
        console.log(`Server is running at port :${port}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed!", err);
})
