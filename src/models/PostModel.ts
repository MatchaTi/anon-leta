import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
  description: {
    type: String,
  },
});

const PostModel = mongoose.models.posts || mongoose.model("posts", PostSchema);

export default PostModel;
