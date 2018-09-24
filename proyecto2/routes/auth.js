const router = require('express').Router()
const User = require('../models/User')
const sendMail = require('../helpers/mailer').sendMail

router.get('/signup',(req,res,next)=>{
  res.render('auth/signup')
})

router.post('/signup',(req,res,next)=>{
  User.register(req.body,req.body.password)
  .then(user=>{ 
    sendMail(req.body.email,`Gracias por tu aportación`)
    res.redirect('/signup')
  })
  .catch(e=>next(e))
})

router.get('/login',(req,res,next)=>{
  res.render('auth/login')
})

router.post('/login',(req,res,next)=>{
  res.redirect('/')
})


module.exports=router