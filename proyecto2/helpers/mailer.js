const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service:'Gmail',
  auth:{
    user:process.env.MAIL,
    pass:process.env.PASS
  }
})
exports.sendMail = (email,message)=>{
  transporter.sendMail({
    from:'autoSardina.com',
    to:email,
    subject:message,
    text:'Ups hubo un problema....',
    html:`
    <p>Bienvenido a autoSardina.com, agradecemos tu colaboración creando nuestro 
    correo de gmail,tu contraseña inicial es <b>123</b>, loggeate
    y empieza a disfrutar del verdadero transporte rapido,seguro y barato</p>
    <h5><a href="http://localhost:3000/login">Dale click aqui para logearte a tu pagina</a></h5>`
  })
  .then(info=>console.log(info))
  .catch(e=>console.log(e))
}

