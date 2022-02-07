import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  author: {
    type: String,
  },
  content: {
    type: String,
  },
  stars: {
    type: Number,
  },
});

const Message = mongoose.model("Message", MessageSchema);

export default Message;
