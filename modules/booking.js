import mongoose from "mongoose";
// const { ObjectId } = mongoose.Schema;

const bookingshema = new mongoose.Schema(
  {
    name: {
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
    phone: {
      type: Number,
      trim: true,
      required: true,
    },
    jina1: {
      type: String,
      required: true,
    },
    jina2: {
      type: String,
      required: true,
    },
    seat: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingshema);
