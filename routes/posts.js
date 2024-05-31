const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for Post
const postSchema = new Schema({
  postText: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now // Automatically set the date to current date and time
  },
  likes: {
    type: Array,
    default: [] // Default number of likes is 0
  }
});

// Create the model from the schema
module.exports = mongoose.model('Post', postSchema);

 
