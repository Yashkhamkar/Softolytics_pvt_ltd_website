const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const nodemailer = require("nodemailer");
const multer = require("multer");
const emailRoute = require("./emailRoute");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "backend/uploads/"); // Uploads folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // unique filename
  },
});

const upload = multer({ storage: storage });

app.use(cors());
app.use("/send", emailRoute);
app.post("/uploadPdf", upload.single("pdf"), (req, res) => {
  console.log(req.file); // Information about the uploaded file
  res.send("PDF uploaded successfully!");
});
