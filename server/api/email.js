const router = require('express').Router()
const nodemailer = require('nodemailer')
module.exports = router

router.post('/', (req, res, next) => {
  console.log('dfhuashf', req)
  const {name, email, message, address} = req.body

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'ypw.chi@gmail.com',
      pass: process.env.GMAILPW
    }
  })
  let mailOptions = {
    to: 'ypw.chi@gmail.com',

    from: 'ypw.chi@gmail.com',
    subject: `Quote request from ${name}.`,
    text: `Email: ${email}\nJob Address:${address} \n${message}`
  }
  transporter.sendMail(mailOptions, function(err) {
    err ? next(err) : res.sendStatus(200)
  })
})
