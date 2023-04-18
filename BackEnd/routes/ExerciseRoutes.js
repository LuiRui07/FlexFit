import express  from "express";
import { getAllExercises, getOneExercise , createExercise , updateExercise, deleteExercise, getExercisesByBodyPart } from "../controllers/ExerciseController.js";

const router = express.Router();

router.get('/', getAllExercises)
router.get('/bodypart/:idBodyPart', getExercisesByBodyPart)

router.get('/:id', getOneExercise)
router.post('/', createExercise)
router.put('/:id', updateExercise)
router.delete('/:id', deleteExercise)

export default router;