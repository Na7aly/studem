const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.OUTLOOK_EMAIL,
    pass: process.env.OUTLOOK_PASSWORD,
  },
});

const mailOptions = {
  from: process.env.OUTLOOK_EMAIL,
  to: 'tomacnatalia95@gmail.com', // Înlocuiește cu o adresă de e-mail validă pentru testare
  subject: 'Test Email',
  text: 'This is a test email from Nodemailer',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
