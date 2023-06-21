import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
    },

    role: {
      type: String,
      default: "User",
    },
  },
  { timestamps: true }
);

userSchema.statics.findAdmins = function () {
  return this.find({ role: "Admin" });
};

const User = mongoose.model("User", userSchema);

export default User;

