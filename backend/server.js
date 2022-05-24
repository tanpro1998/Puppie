import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();

import userRouter from "./routes/auth.js";
import dogRouter from "./routes/dog.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("MongoDB Connected");
});

app.get("/", (req, res) => {
  res.send("Welcome to API...");
});

app.use(express.json());

app.use("/api/auth", userRouter);
app.use("/api/dogs", dogRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
