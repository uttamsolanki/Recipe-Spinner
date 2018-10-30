const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// we create a user schema
let userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  passResetKey: String,
  passKeyExpires: Number,
  createdAt: {
    type: Date,
    required: false
  },
  updatedAt: {
    type: Number,
    required: false
  },
}, {runSettersOnQuery: true});


userSchema.pre('save', function (next) {
  this.email = this
    .email
    .toLowerCase(); // ensure email are in lowercase

  var currentDate = new Date().getTime();
  this.updatedAt = currentDate;
  if (!this.created_at) {
    this.createdAt = currentDate;
  }
  next();
})



// Export the model
module.exports = mongoose.model('user', userSchema);