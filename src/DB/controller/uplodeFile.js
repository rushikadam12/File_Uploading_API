// const asyncHandler = require("../utility/asyncHandler");
// const ApiError = require("../utility/ApiError");
// const ApiResposne = require("../utility/ApiResponse");
// const upload = require("../middleware/multer.middleware");

// const UplodeFiles = asyncHandler(//file uploade
//   upload.single("profileImage"),
//   async (req, res) => {
//     const file = req.file;
//     if (!file) {
//       throw new ApiError(400, "file pls send file");
//     }

//     res.send(new ApiResposne(200, file, "file uploaded"));
//     console.log(file);
//   }
// );

// module.exports = UplodeFiles;
