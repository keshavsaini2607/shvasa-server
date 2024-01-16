import SupportTicket from "../db/models/supportTicket.model.js";
import * as zod from "zod";

const supportTicketSchema = zod.object({
   topic: zod.string(),
   description: zod.string(),
   dateCreated: zod.string(),
   severity: zod.string(),
   type: zod.string(),
   assignedTo: zod.string(),
   status: zod.string(),
});

export const createSupportTicket = async (req, res, next) => {
   try {
      const paramsValidation = supportTicketSchema.safeParse(req.body);
      if (!paramsValidation.success) {
         res.status(422).json({
            message: "Unknow set of inputs, please check and try again",
            success: false,
         });
         return;
      }

      const newTicket = new SupportTicket(req.body);
      const savedTicket = await newTicket.save();
      res.status(200).json({
         message: "Ticket created",
         success: true,
         data: savedTicket,
      });
   } catch (error) {
      next(error);
   }
};

export const getAllTickets = async (_req, res, next) => {
   try {
      const tickets = await SupportTicket.find().populate('assignedTo');
      if (tickets) {
         res.status(200).json({
            message: "Tickets fetched",
            success: true,
            data: tickets,
         });
         return;
      }
      throw new Error("Error fetching tickets");
   } catch (error) {
      next(error);
   }
};
