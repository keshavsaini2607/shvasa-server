import { Schema, model } from "mongoose";

const supportTicketSchema = new Schema({
   topic: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   dateCreated: {
      type: String,
      default: Date.now,
   },
   severity: {
      type: String,
      required: true,
   },
   type: {
      type: String,
      required: true,
   },
   assignedTo: {
      type: Schema.Types.ObjectId,
      ref: 'SupportAgent',
      required: true,
   },
   status: {
      type: String,
      enum: ["New", "Assigned", "Resolved"],
      default: "New",
   },
   resolvedOn: {
      type: String,
   },
}, {timestamps: true});

const SupportTicket = model("SupportTicket", supportTicketSchema);

export default SupportTicket;
