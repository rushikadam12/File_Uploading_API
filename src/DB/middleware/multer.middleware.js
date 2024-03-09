const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //it will set the file destination with 'cb' as the callback function we use it for verification...
    return cb(null, "./temp");
  },
  filename: function (req, file, cb) {
    //add the filename with unique name
    return cb(null, `${Date.now()}-${file.originalname}`);
    },
  
});
const upload = multer({ storage: storage });
module.exports = upload;
