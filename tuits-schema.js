import mongoose from "mongoose";

const schema = mongoose.Schema({
  postedBy: {
    username: String
  },
  tuit: String,
  title: String,
  handle: String,
  likes: Number,
  dislikes: Number,
  avatarIcon: String

}, {collection: 'tuits'});

export default schema;