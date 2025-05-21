import express from "express"
import authroute from "./routes/auth.route.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser"
dotenv.config();
const app = express();
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authroute)
app.get("/",(req,res)=>{
    res.send("connected")
})
let PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("app is listening");
    connectDB()
}) 