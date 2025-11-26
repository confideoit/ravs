import dotenv from 'dotenv';
dotenv.config();

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const mailOptions = {
  from: `"Test Sender" <${process.env.SMTP_USER}>`,
  to: process.env.CONTACT_EMAIL,
  subject: 'Test Email from Node.js',
  text: 'Hello! This is a test email sent using Gmail SMTP and App Password.',
};

async function sendEmail() {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendEmail();
