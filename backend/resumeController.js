const nodemailer = require("nodemailer");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "backend/uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

const sendResume = async (req, res) => {
  // Use the "upload" middleware to handle file upload
  upload.single("file")(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.status(401).json({ message: "Some error occured" });
    }

    // get path and filename of uploaded PDF from request file object
    const pdfPath = req.file.path;
    const pdfFilename = req.file.filename;
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
      subject: `You have received an email from ${req.body.email}`,
      text: `
      Name: ${req.body.name}
      Email: ${req.body.email}
      Intrested Position: ${req.body.position}`,
      attachments: [
        {
          filename: pdfFilename,
          path: pdfPath,
        },
      ],
    };
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        return res.status(401).json({ message: "Some error occured" });
      }
      return res.status(200).json({ message: "Message sent successfully" });
    });
  });
};
module.exports = sendResume;
