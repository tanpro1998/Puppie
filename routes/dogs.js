import express from "express";
import Dogs from "../models/Dogs.js";
const dogsRouter = express.Router();

dogsRouter.get("/", async (req, res) => {
  try {
    const dogs = await Dogs.find();
    res.status(200).json(dogs);
  } catch (error) {
    res.status(500).json(error);
  }
});

dogsRouter.post("/add", async (req, res) => {
  try {
    const newDog = new Dogs(req.body);
    await newDog.save();
    res.status(200).json("Add dog success");
  } catch (error) {
    res.status(500).json(error);
  }
});

dogsRouter.post("/update", async (req, res) => {
  try {
    const dog = await Dogs.findOneAndUpdate({ _id: req.body._id });
    await dog.save();
    res.status(200).json("Update Success");
  } catch (error) {
    res.status(500).json(error);
  }
});

dogsRouter.post("/delete", async (req, res) => {
  try {
    await Dogs.findOneAndDelete({ _id: req.body.dogId });
    res.status(200).json("Delete dog success");
  } catch (error) {
    res.status(500).json(error);
  }
});

export default dogsRouter;
