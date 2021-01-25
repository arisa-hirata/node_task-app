require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'arisa.pirata@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how to get along with the app.`,
        // html: '' you can mmake fancy the email
    });
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'arisa.pirata@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}! I hope to see you back sometime soon!`,
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
