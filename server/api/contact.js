const router = require('express').Router()

var api_key = process.env.MAILGUN_API_KEY
var domain = process.env.MAILGUN_DOMAIN
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

module.exports = router


router.post('/', (req, res, next) => {
    console.log('Hit Post');
    const letter = {
        from: 'John J Sanchez <postmaster@sandboxd5a21496bff9472db5e47d6c9047a3d0.mailgun.org>',
        to: 'sunjin@bu.edu',
        subject: req.body.subject,
        html: req.body.html
    }

    mailgun.messages().send(letter, function (error, body) {
        console.log(body);
        if (!error) res.send('Your message was sent!')
        else res.send('Message failed to send.')
    });
})







