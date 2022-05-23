const mongoose=require("mongoose")
const { Schema } = mongoose;
const CommentSchema = new Schema({
    comment:{
        type: String,
        required: true
    }, 
    userid:{
         type: String
    },
  });
  const Comment= mongoose.model('Comment', CommentSchema);
  module.exports= Comment;