import express from "express";
import Dog from "../models/Dog.js";
const dogRouter = express.Router();

dogRouter.get("/", async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.status(200).json(dogs);
  } catch (error) {
    res.status(500).json(error);
  }
});

dogRouter.post("/add", async (req, res) => {
  try {
    const newDog = new Dog(req.body);
    await newDog.save();
    res.status(200).json("Add dog success");
  } catch (error) {
    res.status(500).json(error);
  }
});

dogRouter.post("/update", async (req, res) => {
  try {
    const dog = await Dog.findOneAndUpdate({ _id: req.body._id });
    await dog.save();
    res.status(200).json("Update Success");
  } catch (error) {
    res.status(500).json(error);
  }
});

dogRouter.post("/delete", async (req, res) => {
  try {
    await Dog.findOneAndDelete({ _id: req.body.dogId });
    res.status(200).json("Delete dog success");
  } catch (error) {
    res.status(500).json(error);
  }
});

export default dogRouter;
