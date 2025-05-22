import mongoose from "mongoose"
const messageschema = new mongoose.Schema(
{
    senderid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    receiverid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    text:{
        type:String,
    },
    image:{
        type:String,
    },
},{
    timestamps:true
}
);
const Message = mongoose.model("message",messageschema);
export default Message;