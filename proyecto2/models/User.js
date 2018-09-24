const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PLM = require('passport-local-mongoose')

const userSchema = new Schema({
  email: String,
  username: String
})

userSchema.plugin(PLM,{usernameField:'email'})
module.exports = mongoose.model('User',userSchema)