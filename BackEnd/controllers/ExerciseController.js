import BodyPartModel from "../models/BodyPartModel.js";
import ExerciseModel from "../models/ExerciseModel.js";

// Creamos el CRUD PARA LOS EJERCICIOS

// CREATE EXERCISE
export const createExercise = async (req, res) => {
    const { name, image,subpart, idBodyPart } = req.body;
    try {
        let Exercise = await ExerciseModel.findOne({
            where: {
                name
            }
        });
        if (Exercise) {
            return res.json({
                message: 'This exercise already exists',
                data: {}
            });
        }else{

            let newExercise = await ExerciseModel.create({
                name,
                description,
                image,
                idBodyPart
                
            }, {
                fields: ['name', 'description', 'image', 'idBodyPart']
            });
            if (newExercise) {
                return res.json({
                    message: 'Exercise created successfully',
                    data: newExercise
                });
            }
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

// GET ALL EXERCISES
export const getAllExercises = async (req, res) => {
    try {
        let Exercises = await ExerciseModel.findAll({
            include: [{all:true}]
        });
        if (Exercises) {
            return res.json({
                message: `${Exercises.length} Exercises found`,
                data: Exercises
            });
        }else{
            return res.json({
                message: 'No Exercises found',
                data: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

// GET ONE EXERCISE
export const getOneExercise = async (req, res) => {
    const { id } = req.params;
    try {
        let Exercise = await ExerciseModel.findOne({
            where: {
                id
            },
            include: ['bodypart']
        });
        if (Exercise) {
            return res.json({
                message: 'Exercise found',
                data: Exercise
            });
        }else{
            return res.json({
                message: 'No Exercise found',
                data: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

// DELETE EXERCISE
export const deleteExercise = async (req, res) => {
    const { id } = req.params;
    try {
        let Exercise = await ExerciseModel.findOne({
            where: {
                id
            }
        });
        if (Exercise) {
            await Exercise.destroy();
            return res.json({
                message: 'Exercise deleted successfully',
                data: Exercise
            });
        }else{
            return res.json({
                message: 'No Exercise found',
                data: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

// UPDATE EXERCISE
export const updateExercise = async (req, res) => {
    const { id } = req.params;
    const { name, description, image, idBodyPart } = req.body;
    try {
        let Exercise = await ExerciseModel.findOne({
            where: {
                id
            }
        });
        if (Exercise) {
            await Exercise.update({
                name,
                description,
                image,
                idBodyPart
            }, {
                fields: ['name', 'description' ,'image', 'idBodyPart']
            });
            return res.json({
                message: 'Exercise updated successfully',
                data: Exercise
            });
        }else{
            return res.json({
                message: 'No Exercise found',
                data: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}


export const getExercisesByBodyPart = async (req, res) => {
    const { idBodyPart } = req.params;
    try {
        let Exercises = await ExerciseModel.findAll({
            where: {
                bodypart: idBodyPart
            }        
        });
        if (Exercises) {
            

            return res.json({
                message: `${Exercises.length} Exercises found for that bodypart`,
                data: Exercises
            });
        }else{
            return res.json({
                message: 'No Exercises found',
                data: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}