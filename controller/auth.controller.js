// This code is part of an Express.js application that handles user authentication.
const UserModel = require("../model/auth.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const AuthRouter = require("express").Router();

AuthRouter.get("/", (_, res) => {
  return res.status(200).json({
    message: "Welcome to the Authentication API",
  });
});

AuthRouter.post("/register", async (req, res) => {
  try {
    const existingUser = await UserModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    //Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    // Create a new user
    const user = await UserModel.create(req.body);
    return res.status(200).json({
      message: "Register Successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

AuthRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide both email and password",
      });
    }
    // Find the user by email
    const user = await UserModel.findOne({
      email: req.body.email,
    }).select("+password");

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    //verify the password as a string
    if (!user.password || typeof user.password !== "string") {
      return res.status(500).json({
        success: false,
        message: "Server configuration error",
      });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
        success: false,
      });
    }
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    //Generate JWT token (optional, if you want to implement JWT)
    const token = jwt.sign({ username: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });

    // Return the user data without password and the token
    if (!token) {
      return res.status(500).json({
        success: false,
        message: "Token generation failed",
      });
    }
    if (!userWithoutPassword) {
      return res.status(500).json({
        success: false,
        message: "User data retrieval failed",
      });
    }

    // set the token in the response header
    res.setHeader("authorization", `Bearer ${token}`);
    // Return the response
    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: userWithoutPassword,
      token: token,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = AuthRouter;
