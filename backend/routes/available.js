import express from "express";
import Available from "../models/AvailableDog.js";
const availRouter = express.Router();

availRouter.get("/", async (req, res) => {
  try {
    const dog = await Available.find();
    res.status(200).json(dog);
  } catch (error) {
    res.status(500).json(error);
  }
});


availRouter.post("/add", async (req, res) => {
    try {
      const newDog = new Available(req.body);
      await newDog.save();
      res.status(200).json("Add dog success");
    } catch (error) {
      res.status(500).json(error);
    }
  });
export default availRouter;
