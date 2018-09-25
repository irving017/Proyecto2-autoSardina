const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PLM = require('passport-local-mongoose')

const userSchema = new Schema({
  email: String,
  username: String,
  companyName:String,
  companyId:{
    type:Schema.Types.ObjectId,
    ref:'User'
  }
})

userSchema.plugin(PLM,{usernameField:'email'})
module.exports = mongoose.model('User',userSchema)