import express  from "express";
import { getAllUsers, getUser , createUser , updateUser, deleteUser, logInUser } from "../controllers/UserController.js";

const router = express.Router();

router.get('/', getAllUsers)
router.get('/:username', getUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/:username/:password', logInUser)

export default router;