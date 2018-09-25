const router = require('express').Router()
const User = require('../models/User')
const Company = require('../models/Company')

router.get('/company/:id',(req,res,next)=>{
  const {id} = req.params
  res.render('/profile/company/:id')
})

router.get('/user/:id',(req,res,next)=>{
  res.render()
})

module.exports = router