import express  from "express";
import { getAllDays, getDayByRoutine , getOneDay , createDay, updateDay, deleteDay } from "../controllers/DayController.js";

const router = express.Router();

router.get('/', getAllDays)

router.get('/:id', getOneDay)
router.post('/', createDay)
router.put('/:id', updateDay)
router.delete('/:id', deleteDay)

export default router;