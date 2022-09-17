import mongoose from "mongoose";

const availSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
    },
    breed: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    gender: {
      type: String,
    },
    age: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    sold: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Avail = mongoose.model("Avail", availSchema);

export default Avail;
