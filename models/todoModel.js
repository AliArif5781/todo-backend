import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    // completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const todoModel = mongoose.model("todo", todoSchema);
