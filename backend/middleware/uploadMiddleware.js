const multer = require("multer");
const path = require("path");

// Ensure the 'uploads' directory exists
const fs = require("fs");
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Save images to 'uploads/' folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + file.originalname.replace(/\s+/g, "_");
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage });

module.exports = upload;
