import express from "express";
import {
   createSupportAgent,
   getSupportAgentList,
} from "../controllers/supportAgent.controller.js";

const router = express.Router();

router.post("/save", createSupportAgent);
router.get("/all", getSupportAgentList);

export default router;
