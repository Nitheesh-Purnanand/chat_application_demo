import express from "express"
import authroute from "./routes/auth.route.js"
import messageroute from "./routes/message.route.js"

import dotenv from "dotenv"
import { connectDB } from "./lib/db.js"
import cookieParser from "cookie-parser"
 import cors from "cors"
dotenv.config();
const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/api/auth", authroute)
app.use("/api/message",messageroute)
app.get("/",(req,res)=>{
    res.send("connected")
})
let PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("app is listening");
    connectDB()
}) 