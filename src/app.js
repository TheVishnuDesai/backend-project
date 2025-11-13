import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
// URL me special characters (jaise space, &, =) ko safe format me convert karna, taaki wo internet par sahi kaam kare.
app.use(express.urlencoded({extended: true,limit: "16kb"})) 
app.use(express.static("public"))

export default app