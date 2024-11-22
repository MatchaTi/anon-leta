import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
  recipient: {
    type: String,
  },
  id_track: {
    type: String,
  },
  description: {
    type: String,
  },
});

const PostModel = mongoose.models.posts || mongoose.model("posts", PostSchema);

export default PostModel;
