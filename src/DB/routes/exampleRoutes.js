const express = require("express");
const router = express.Router();
const exampleController = require("../controller/exampleController");
// const UplodeFiles = require('../controller/uplodeFile');
// const CloudUplode = require('../utility/Cloudnary');
const upload = require("../middleware/multer.middleware");
const register = require("../controller/register.controller");

router.route("/").get(exampleController);
router.route("/").post(
  upload.fields([
    {
      name: "user_profile",
      maxCount: 1,
    }
  ]),
  register
);
// router.route("/cloudUplode").post(CloudUplode);

module.exports = router;
