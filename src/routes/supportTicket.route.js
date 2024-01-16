import express from 'express';
import { createSupportTicket, getAllTickets } from '../controllers/supportTicket.controller.js';

const router = express.Router();

router.post('/save', createSupportTicket);
router.get('/all', getAllTickets);

export default router;