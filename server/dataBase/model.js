import mongoose from "mongoose";

const { Schema } = mongoose;

const newsSchema = new Schema({
  type: Number,
  title: String,
  newsText: String,
  status: Number,
  newsTime: { type: Date, default: Date.now },
  // newsTime: { currentTime: () => Math.floor(Date.now() / 1000) },
});

export const NewsModel = mongoose.model("news", newsSchema);
