const mongoose = require('mongoose');
const { Schema } = mongoose;
const AdminSchema = new Schema({
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
const admin = mongoose.model('admin', AdminSchema);
module.exports = admin;