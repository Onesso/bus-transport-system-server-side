import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const vehiclechema = new mongoose.Schema(
  {
    plate: {
      type: String,
      trim: true,
      required: true,
      maxlength: 160,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    from: {
      type: ObjectId,
      ref: "Route",
      required: true,
    },    
    to: {
      type: ObjectId,
      ref: "Route",
      required: true,
    },
    no_buses: {
      type: Number,
      default: 0,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Vehicle", vehiclechema);
