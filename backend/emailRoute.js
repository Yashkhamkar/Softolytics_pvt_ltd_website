const express = require("express");
const multer = require("multer");
const sendMail = require("./emailController");
const sendResume = require("./resumeController");
const router = express.Router();
router.route("/").post(sendMail);
router.route("/resume").post(sendResume);

module.exports = router;
