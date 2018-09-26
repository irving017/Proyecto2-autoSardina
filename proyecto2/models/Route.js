const mongoose = require('mongoose')
const Schema = mongoose.Schema

const routeSchema = new Schema({
  start:[{
    type:Number
  }],
  destiny:[{
    type:Number
  }],
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  }
})

module.exports = mongoose.model('Route',routeSchema)