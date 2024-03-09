const { resolve } = require("path");
const ApiError = require("./ApiError");
const fs = require("fs");
const cloudinary = require("cloudinary");
cloudinary.v2.config({
  cloud_name: "dh7of4zru",
  api_key: "322815351926131",
  api_secret: "lXzjowMFvbyC_72-CYO_1W2Vq28",
});

const options = {
  use__filename: true,
  unique_filename: false,
  overwrite: true,
  timeout: 60000,
  secure: true,
};

const CloudUplode = async (imgPath) => {
  try {
    if (!imgPath) {
      return null;
    }
    const resp = await cloudinary.v2.uploader.upload(
      imgPath,
      {
        timeout: 120000,
      },
      function (error, result) {
        if (error) {
          console.log(error);
        } else {
          console.log(result);
        }
      }
    );

    console.log(resp);
    fs.unlinkSync(imgPath);
    return resp;
  } catch (error) {
    //remove the local save IMG
    fs.unlinkSync(imgPath);
    console.log(error);
    return null;
  }
};
// const CloudUplode = (imgPath) => {
//   return new Promise((resolve, reject) => {
//     const result = cloudinary.uploader
//       .upload(imgPath, options)
//       .then(() => {
//         console.log(result);
//         resolve(result);
//       })
//       .catch((error) => {
//         console.log(error)
//         reject(error)
//       });
//   });
// };
module.exports = CloudUplode;
