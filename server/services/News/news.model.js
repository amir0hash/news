import mongoose from "mongoose";

const { Schema } = mongoose;

const newsSchema = new Schema({
  type: Number,
  authorId: mongoose.Types.ObjectId,
  title: String,
  newsText: String,
  status: Number,
  newsTime: { type: Date, default: Date.now },
});

export const NewsModel = mongoose.model("news", newsSchema);
