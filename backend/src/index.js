import express from "express"
import authroute from "./routes/auth.route.js"

const app = express();
app.use("/api/auth", authroute)
app.get("/",(req,res)=>{
    res.send("connected")
})
app.listen(3000,()=>{
    console.log("app is listening");
}) 