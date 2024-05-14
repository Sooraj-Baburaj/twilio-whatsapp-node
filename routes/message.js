import { Router } from "express";
import { sendMessage } from "../controllers/message.js";

const router = Router();

router.post("/send-whatsapp", sendMessage);

export default router;
