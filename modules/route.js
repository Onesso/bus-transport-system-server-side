import mongoose, { Schema } from "mongoose";

const routeShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 64,
    unique: true,
  },
  slug: {
    unique: true,
    type: String,
    lowercase: true,
  },
});

export default mongoose.model("Route", routeShema);


