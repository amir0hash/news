import mongoose from "mongoose";

const { Schema } = mongoose;

const authSchema = new Schema({
  firstname: String,
  lastname: String,
  status: Number,
});

export const AuthSchema = mongoose.model("author", authSchema);
