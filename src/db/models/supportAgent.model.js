import { Schema, model } from "mongoose";

const supportAgentSchema = new Schema(
   {
      name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      phone: {
         type: String,
         required: true,
      },
      description: {
         type: String,
         required: true,
      },
      active: {
         type: Boolean,
         default: true,
      },
      dateCreated: {
         type: String,
         default: Date.now(),
      },
   },
   { timestamps: true }
);

const SupportAgent = model("SupportAgent", supportAgentSchema);

export default SupportAgent;
