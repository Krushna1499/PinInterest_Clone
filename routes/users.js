const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/nayaapp");


// Define the schema for User
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  posts: [{
    type: String
  }],
  dp: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  }
});

// Create the model from the schema
module.exports =mongoose.model('User', userSchema);
