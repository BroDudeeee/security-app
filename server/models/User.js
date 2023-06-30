import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "You have to provide Username"],
    unique: [true, "Username Already Exists"],
  },
  email: {
    type: String,
    required: [true, "You have to provide email"],
    unique: [true, "Email Already Exists"],
  },
  password: {
    type: String,
    required: [true, "You have to provide Password"],
  },
  profile: {
    type: String,
    default: "",
  },
});

export default mongoose.model.users || mongoose.model("User", userSchema);
