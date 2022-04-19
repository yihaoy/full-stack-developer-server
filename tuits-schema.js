import mongoose from "mongoose";

const schema = mongoose.Schema({
  postedBy: {
    username: String
  },
  handle: String,
  title: String,
  tuit: String,
  likes: Number,
  dislikes: Number,
  avatarIcon: String

}, {collection: 'tuits'});

export default schema;