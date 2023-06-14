import mongoose from "mongoose";

const customSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      // required: true,
    },
    address: {
      type: String,
      // required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    maxGroupSize: {
      type: Number,
      required: true,
    },
    isApproved : {
        type : Boolean,
        default : false,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Custom", customSchema);
