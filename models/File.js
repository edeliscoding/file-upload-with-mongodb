import mongoose, { Schema } from "mongoose";

const fileSchema = new Schema(
  {
    title: String,
  },
  {
    timestamps: true,
  }
);

const File = mongoose.models.File || mongoose.model("File", fileSchema);

export default File;
