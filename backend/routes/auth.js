import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, username, password, cfPassword, role } = req.body;
  if (cfPassword !== password) {
    return res.status(400).json("Password don't match");
  }
  try {
    const secretPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      username,
      password: secretPassword,
      role,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    {
      expiresIn: "5s",
    }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "3d" }
  );
};

userRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json("Not found user!");
    } else {
      const secretPassword = await bcrypt.compare(password, user.password);
      if (secretPassword) {
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        res.status(200).json({
          accessToken: accessToken,
          refreshToken: refreshToken,
          ...user._doc,
        });
      } else {
        res.status(400).json("Wrong password");
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

export default userRouter;
