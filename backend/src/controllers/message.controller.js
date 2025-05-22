import cloudinary from "../lib/cloudinary.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const getusersforsidebar = async (req,res) => {
try{

    const loggedinuserid = req.user._id
    const filteredusers = await User.find({_id:{$ne:loggedinuserid}}).select("-password");
    res.status(200).json(filteredusers);
}catch(error){
    console.error("error in getusersforsidebar: ",error.message);
    res.status(500).json({error:"internal server error"});
}
}

export const getmessages = async(req,res)=>{
    try{
        const {id:usertochatid} = req.params
        const myid = req.user._id;
        const messages = await Message.find({
            $or:[
                {senderid:myid,receiverid:usertochatid},
                {senderid:usertochatid,receiverid : myid}
            ]
        })
        res.status(200).json(messages)
    }catch(error){
        console.log("error in getmessages controller:",error.message);
        res.status(500).json({error:"interal server error"});
    }
}

export const sendmessage = async(req,res) =>{
    try {
        const { text , image } = req.body
        const { id : receiverid} = req.params;
        const sendrid = req.user._id;
        let imageurl;
        if(image){
            //upload base64 image to cloudinary
            const uploadresponse = await cloudinary.uploader.upload(image)
            imageurl = uploadresponse.secure_url;

        }

    const newmessage = new Message({
        senderid,
        receiverid,
        text,
        image:imageurl,
    })

    await newmessage.save();

    //todo:realtime functionality goes here => socket.io
    
    res.status(201).json(newmessage)
    } catch (error) {
        console.log("Error in sendMessage controller: ",error.message)
        res.status(500).json({error:"internal server error"})
    }
}
