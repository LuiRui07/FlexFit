import express  from "express";
import { getAllWorkouts, getOneWorkout , createWorkout , updateWorkout, deleteWorkout ,getAllWorkoutsFromUser,getAllWorkoutsOfAnUserAndPublicOnes, getAllPublicWorkouts} from "../controllers/WorkoutController.js";

const router = express.Router();

router.get('/', getAllWorkouts)
router.get('/:id', getOneWorkout)
router.get('/user/:id', getAllWorkoutsFromUser)
router.get('/userAndPublic/:id', getAllWorkoutsOfAnUserAndPublicOnes)
router.get('/publicWorkouts/', getAllPublicWorkouts)


router.post('/', createWorkout)
router.put('/:id', updateWorkout)
router.delete('/:id', deleteWorkout)

export default router;