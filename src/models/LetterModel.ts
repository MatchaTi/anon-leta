import mongoose, { Schema } from "mongoose";

const LetterSchema = new Schema({
  recipient: {
    type: String,
  },
  id_track: {
    type: String,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const LetterModel = mongoose.models.letters || mongoose.model("letters", LetterSchema);

export default LetterModel;
