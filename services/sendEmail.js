const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
    console.log(options)
  var transporter = nodemailer.createTransport({
   service : "gmail",
    
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
  });

  const mailOptions = {
    from: "Aviyan Khatiwada <aviyankhatiwada11@gmail.com>",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;