import mongoose from "mongoose";

const dogsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    breed: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    subImg: {
      type: [String],
    },
  },
  { timestamps: true }
);

const Dogs = mongoose.model("Dogs", dogsSchema);

export default Dogs;
