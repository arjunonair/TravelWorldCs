import mongoose from "mongoose";

const customSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: false,
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
    price : {
      type : Number
    },
    isApproved : {
        type : Boolean
    }
  },
  { timestamps: true }
);

export default mongoose.model("Custom", customSchema);
