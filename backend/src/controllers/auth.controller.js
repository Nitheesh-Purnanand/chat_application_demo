import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

export const signup = async (req,res) => {
    const {fullname , email , password } = req.body
    try{
        //if fullname not provided
        if(!fullname || !email || !password){
            return res.send(400).json({message:"All the fields are required"})
        }

        //check user exists
        const user = await User.findOne({email})
        if(user) return res.send(400).json({message:"email exists"})
        
        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        //creating user
        const newUser = new User({
            fullname : fullname,
            email:email,
            password:hashedPassword,
        })
        if(newUser){
            //generate jwt token here
            generateToken(newUser._id,res);
            await newUser.save();
            res.status(201).json({
                _id:newUser._id,
                fullname:newUser.fullname,
                email:newUser.email,
                profilepic:newUser.profilepic,
            })
        }else{
            res.Status(400).json({message:"invalid user data"});
        }
        }
    catch(error){
        console.log("error in signup controller",error.message)
        res.status(500).json({message:"internal server error"});
    }
}
export const login = (req,res) =>{
    res.send("login route");
}
export const logout = (req,res) =>{
    res.send("logout route");
}