// name email phone number message
import mongoose, { Schema } from "mongoose";

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 160,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    maxlength: 160,
  },
  phone: {
    type: String,
    required: true,
  },
  enquiry: {
    type: String,
    required: true,
    maxlength: 1000,
    trim: true,
  },
});

export default mongoose.model("Enquiry", enquirySchema);
