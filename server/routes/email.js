import express from "express";
import { savePost } from "../controllers/email.js";

const router = express.Router();

router.post("/post", savePost);

export default router;
