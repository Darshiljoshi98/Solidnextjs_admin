import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    clientname: {
      type: String,
      required: true,
    },
    clientDesignation: {
      type: String,
      required: true,
    },
    clientFeedback: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contact =
  mongoose.models.clientFeedBack ??
  mongoose.model("clientFeedBack", contactSchema);

export default Contact;
