import express  from "express";
import { getAllWorkouts, getOneWorkout , createWorkout , updateWorkout, deleteWorkout ,getAllWorkoutsFromUser} from "../controllers/WorkoutController.js";

const router = express.Router();

router.get('/', getAllWorkouts)
router.get('/:id', getOneWorkout)
router.get('/user/:id', getAllWorkoutsFromUser)

router.post('/', createWorkout)
router.put('/:id', updateWorkout)
router.delete('/:id', deleteWorkout)

export default router;