const router = require('express').Router()
const User = require('../models/User')
const Company = require('../models/Company')
const uploadCloud = require('../helpers/cloudinary')

router.get('/company/:id',(req,res,next)=>{
  const {id} = req.params
  User.findById(req.user._id).populate('Company')
  .then(user=>{
    res.render('profile/company',user)
  })
  .catch(e=>next(e))
})

router.get('/user/:id',(req,res,next)=>{
  console.log(req.user)
  res.render('profile/user',req.user)
})

router.get('/route/new',(req,res,next)=>{
  res.render('routes/new')
})

module.exports = router