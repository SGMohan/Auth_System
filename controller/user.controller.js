const UserRouter = require("express").Router();
const UserModel = require("../model/auth.model");
const { verifyToken } = require("../middleware/auth.middleware");
UserRouter.get("/:_id", verifyToken, async (req, res) => {
  try {
    const _id = req.user.username;
    const user = await UserModel.findById(_id).select("-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});
module.exports = UserRouter;
