// Crear Un ejercicio para un dia de entrenamiento
import ExerciseDayModel from '../models/ExerciseDayModel.js';

export const createExerciseDay = async (req, res) => {
    try{
        const { workoutday, exerciseId, reps, series, weight, } = req.body;

        const newExerciseDay = await ExerciseDayModel.create({
            reps,
            series,
            weight,
            workoutday,
            exerciseId,
        }, {
            fields: ['reps', 'series', 'weight', 'workoutday', 'exerciseId']
        });
        if(newExerciseDay) {
            res.json({
                message: 'ExerciseDay created successfully',
                data: newExerciseDay
            });
        }
    }catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

//Eliminar un ejercicio de un dia de entrenamiento
export const deleteExerciseDay = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRowCount = await ExerciseDayModel.destroy({
            where: {
                idExercise: id
            }
        });
        res.json({
            message: 'ExerciseDay deleted successfully',
            count: deleteRowCount
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}