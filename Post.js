import mongoose from "mongoose";

const Post = new mongoose.Schema({
    author:{required:true, type:String},
    title:{required:true, type:String},
    content:{required:true, type:String},
    pic:{type: String}
})

export default mongoose.model('Post', Post )