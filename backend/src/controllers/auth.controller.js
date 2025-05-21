import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import cloudinary from "../lib/cloudinary.js"

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
export const login = async (req,res) =>{
    const {email,password} = req.body
    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"invalid credentials"})
        }

       const ispasswordcorrect = await bcrypt.compare(password,user.password)
        if(!ispasswordcorrect){
        return res.status(400).json({message:"invalid credentials"})
        }
        generateToken(user._id,res)
        res.status(200).json({
            _id:user._id,
            fullname:user.fullname,
            emai:user.email,
            profilepic:user.profilepic,
        })
    }catch(error){
        console.log("eroor in login corntroller",error.message);
        res.status(500).json({message:"ineternal server error"});
    }
}
export const logout = (req,res) =>{
    try{
        res.cookie("jwt",'',{maxAge:0})
        res.status(200).json({message:"logged out successfully"})
    }catch(error){
        console.log("error in logout controller",error.message)
    }
}
export const updateprofile =async (req,res) =>{
    try{
        const {profilepic} = req.body;
       const userID = req.user._id
        if(!profilepic){
            return res.status(400).json({message:"profile pic is required"})
        }
       const uploadresponse = await cloudinary.uploader.upload(profilepic)
       const updateeduser = await User.findByIdAndUpdate(userID,{profilepic:uploadresponse.secure_url},{new:true})
       res.status(200).json(updateeduser)
    }catch(error){
     res.send(500).json({message:"internal server error"});   
    }
}
export const checkauth= (req,res)=>{
    try{
        res.status(200).json(req.user);
    }catch(error){
        console.log("error in checksuth controller",error.message);
        res.status(500).jso({message:"internal server"});
    }
}