const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  number: {
    type: String,
    unique:true
  },
  loginTime:{
    type:Date,
    default: Date.now
  }
});
const User = mongoose.model('User', UserSchema);
module.exports = User;