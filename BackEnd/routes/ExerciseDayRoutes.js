import express from "express";
import {createExerciseDay,deleteExerciseDay} from "../controllers/ExerciseDayController.js"
const router = express.Router();

router.post('/', createExerciseDay)
router.delete('/:id', deleteExerciseDay)

export default router;