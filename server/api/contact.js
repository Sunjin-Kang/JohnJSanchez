const router = require('express').Router()

var apiKey = process.env.MAILGUN_API_KEY
var domain = process.env.MAILGUN_DOMAIN
var mailgun = require('mailgun-js')({apiKey: apiKey, domain: domain})
router.post('/', (req, res, next) => {
  console.log('Hit Post')
  const letter = {
    from: 'John J Sanchez <postmaster@sandboxd5a21496bff9472db5e47d6c9047a3d0.mailgun.org>',
    to: 'John.Sanchez@Columbia.edu',
    subject: req.body.subject,
    html: req.body.html
  }

  mailgun.messages().send(letter, function (error, body) {
    console.log(body)
    if (!error) res.send('Your message was sent!')
    else res.send('Message failed to send.')
  })
})
module.exports = router
