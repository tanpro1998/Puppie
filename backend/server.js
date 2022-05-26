import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
const app = express();

import userRouter from "./routes/auth.js";
import dogsRouter from "./routes/dogs.js";
import availRouter from "./routes/available.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("MongoDB Connected");
});

app.get("/", (req, res) => {
  res.send("Welcome to API...");
});

app.use(express.json());
app.use(cors());

app.use("/api/auth", userRouter);
app.use("/api/dogs", dogsRouter);
app.use("/api/available", availRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
