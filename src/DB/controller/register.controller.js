const ApiError = require("../utility/ApiError");
const ApiResposne = require("../utility/ApiResponse");
const CloudUplode = require("../utility/Cloudnary");
const asyncHandler = require("../utility/asyncHandler");

const register = asyncHandler(async (req, res) => {
  
  const file = req.files?.user_profile[0]?.path;
  
  if (!file) {
    throw new ApiError(400, "File not found", file);
  }
  // cloudinary.image("docs/handbag2.jpg", {gravity: "auto", height: 215, width: 215, crop: "auto"})
  //   const transformIMG = cloudinary.image(resp.url, {
  //   transformation: [
  //     { gravity: "face", height: 200, width: 200, crop: "thumb" },
  //     { radius: "max" },
  //     { fetch_format: "auto" },
  //   ],
  // });
  // console.log(transformIMG);
  const userprofile = await CloudUplode(file);

  if (!userprofile) {
    throw new ApiError(409, "upload failed");
  }
  console.log("form register controller cloudinary", userprofile);
  res.send(new ApiResposne(200, "api send"));
});
module.exports = register;
