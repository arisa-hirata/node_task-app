require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
    to: 'arisa.pirata@gmail.com',
    from: 'arisa.pirata@gmail.com',
    subject: 'This is m first creation',
    text: 'I hope this one acutually get to you.'
});
