const router = require('express').Router()
const User = require('../models/User')
const Company = require('../models/Company')
const uploadCloud = require('../helpers/cloudinary')
const Route = require('../models/Route')

router.get('/company/:id',(req,res,next)=>{
  const {id} = req.params
  User.findById(req.user._id).populate('companyId')
  .then(user=>{
    Company.findById(user.companyId).populate('routes')
    .then(company=>{
    res.render('profile/company',{user,company})
    })
  })
  .catch(e=>next(e))
})

router.get('/user/:id',(req,res,next)=>{
  User.findById(req.user._id).populate('routes')
  .then(user=>{
    console.log(user)
    res.render('profile/user',user)
  })
})
router.get('/route/new',(req,res,next)=>{
  res.render('routes/new')
})

router.post('/route/new', async (req,res,next)=>{
  //Router.create({start:req.body.start,destiny:req.body.destiny,time:req.body.time,seats:req.body.seats,TE:req.body.TE,user:req.user._id,company:req.user.companyId})
  try{
  const ruta = await Route.create({...req.body,user:req.user._id,company:req.user.companyId })
  const u = await User.findByIdAndUpdate(req.user._id,{$push:{routes: ruta._id}})
  const company = await Company.findByIdAndUpdate(u.companyId,{$push:{routes:ruta._id}})
  console.log(ruta)
  res.redirect(`/profile/user/${req.user._id}`)
  }
  catch(e){
    console.log(e)
  }
})

router.get('/route/delete/:id',(req,res,next)=>{
  const {id} =req.params
  console.log(req.params)
  Route.findByIdAndRemove(id)
  .then(r=>res.redirect(`/profile/user/${r.user}`))
  .catch(e=>next(e))
})

module.exports = router