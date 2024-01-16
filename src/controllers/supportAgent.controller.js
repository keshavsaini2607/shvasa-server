import zod from "zod";
import SupportAgent from "../db/models/supportAgent.model.js";

const supportAgentSchema = zod.object({
   name: zod.string(),
   email: zod.string().email(),
   phone: zod.string(),
   description: zod.string(),
   active: zod.boolean(),
   dateCreated: zod.string(),
});

export const createSupportAgent = async(req, res, next) => {
   try {
      const paramsValidation = supportAgentSchema.safeParse(req.body);
      if (!paramsValidation.success) {
         res.status(422).json({
            message: "Unknown input values, please check and retry",
            success: false,
         });
         return;
      }
      const {
         name,
         email,
         phone,
         description,
         active = true,
         dateCreated,
      } = req.body;
      const newSupportAgent = new SupportAgent({
         name,
         email,
         phone,
         description,
         active,
         dateCreated,
      });

      const savedAgent = await newSupportAgent.save();
      res.status(200).json({
        message: "New agent created",
        success: true,
        savedAgent
      })
   } catch (error) {
      next(error);
   }
};

export const getSupportAgentList = async (_req, res, next) => {
    try {
        const agents = await SupportAgent.find();
        if(agents) {
            res.status(200).json({
                message: 'Success',
                success: true,
                agents
            })
            return;
        }
        throw new Error('Error finding agents');
    } catch (error) {
        next(error);
    }
}