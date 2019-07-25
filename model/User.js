const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;


const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: String
});


// On save hook.
// Before the model gets saved, run this function
UserSchema.pre('save', async function(next){
  const user = this;
  try {
    const salt = await bcrypt.genSalt();
    console.log('salt', salt);
    const hash = await bcrypt.hash(user.password, salt);
    console.log('hash', hash);
    user.password = hash;
    next();
  } catch(e) {
    return next(err);
  }
});

UserSchema.methods.comparePassword = async function(candidatePassword, callback){
  const user = this;
  try {
    const isMatch = await bcrypt.compare(candidatePassword, user.password);
    callback(null, isMatch);
  } catch(err) {
    callback(err);
  }
};

const User = mongoose.model('User', UserSchema);

module.exports = User;