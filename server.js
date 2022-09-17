import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();

import userRouter from "./routes/auth.js";
import dogsRouter from "./routes/dogs.js";
import availRouter from "./routes/available.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("MongoDB Connected");
});

app.use(express.json());
app.use(cors());

app.use("/api/auth", userRouter);
app.use("/api/dogs", dogsRouter);
app.use("/api/available", availRouter);

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
