const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  //   console.log(req.body);
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
    secure: true,
  });
  const mailData = {
    to: "yashkhamkar1100@gmail.com",
    subject: `You have recived email from ${req.body.email}`,
    text: `
    Name:- ${req.body.name}
    Phone:- ${req.body.phone}
    Message:- ${req.body.message}`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      return res.status(401).json({ message: "Some error occured" });
    }
  });
  return res.status(200).json({ message: " Message sent successfully" });
};
module.exports = sendMail;
