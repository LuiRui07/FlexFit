import express from "express";
import { getAllParts } from "../controllers/BodyPartController.js";

const router = express.Router();

router.get("/", getAllParts);

export default router;
