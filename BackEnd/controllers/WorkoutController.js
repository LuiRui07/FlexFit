import WorkoutModel from "../models/WorkoutModel.js";

import { Op } from "sequelize";

// Creamos el CRUD PARA EL Workout

// CREATE Workout
export const createWorkout = async (req, res) => {
    const { name, description, user_id } = req.body;
    console.log
    try {
        let newWorkout = await WorkoutModel.create({
            name,
            description,
            user_id
        }, {
            fields: ['name', 'description','user_id']
        });
        if (newWorkout) {
            return res.json({
                message: 'Workout created successfully',
                data: newWorkout
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

// GET ALL WORKOUTS
export const getAllWorkouts = async (req, res) => {
    try {
        let Workouts = await WorkoutModel.findAll({include:[{all:true}]});
        if (Workouts) {
            return res.json({
                message: `${Workouts.length} Workouts found`,
                data: Workouts
            });
        }else{
            return res.json({
                message: 'No Workouts found',
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

// GET ONE WORKOUT
export const getOneWorkout = async (req, res) => {
    const { id } = req.params;
    try {
        let Workout = await WorkoutModel.findOne({
            where: {
                id
            },
            include:[{all:true,nested:true}]
        });
        if (Workout) {
            return res.json({
                message: 'Workout found',
                data: Workout
            });
        }else{
            return res.json({
                message: 'No Workout found',
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

// DELETE WORKOUT
export const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    try {
        let deleteRowCount = await WorkoutModel.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            return res.json({
                message: 'Workout deleted successfully',
                count: deleteRowCount
            });
        }else{
            return res.json({
                message: 'No Workout found',
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

// UPDATE WORKOUT
export const updateWorkout = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, favorite } = req.body;
    try {
        let Workouts = await WorkoutModel.findAll({
            attributes: ['id', 'nombre', 'descripcion', 'favorite'],
            where: {
                id
            }
        });
        if (Workouts.length > 0) {
            Workouts.forEach(async Workout => {
                await Workout.update({
                    nombre,
                    descripcion,
                    usuario,
                    favorite
                });
            });
        }
        return res.json({
            message: 'Workout updated successfully',
            data: Workouts
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}



// Get all workouts from a user
export const getAllWorkoutsFromUser = async (req, res) => {
    const { id } = req.params;
    try {
        let Workouts = await WorkoutModel.findAll({
            where: {
                user_id: id
            },  
            include:[{all:true}]
        });
        if (Workouts) {
            return res.json({
                message: `${Workouts.length} Workouts found`,
                data: Workouts
            });
        }else{
            return res.json({
                message: 'No Workouts found',
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

export const getAllWorkoutsOfAnUserAndPublicOnes = async (req, res) => {
    const { id } = req.params;
    try {
        let Workouts = await WorkoutModel.findAll({
            where: {
                [Op.or]: [{user_id: id}, {private: false}]
            },
            include:[{all:true}]
        });
        if (Workouts) {
            return res.json({
                message: `${Workouts.length} Workouts found`,
                data: Workouts
            });
        }else{
            return res.json({
                message: 'No Workouts found',
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


export const getAllPublicWorkouts = async (req, res) => {
    try {
        let Workouts = await WorkoutModel.findAll({
            where: {
                private: false
            },
            include:[{all:true}]
        });
        if (Workouts) {
            return res.json({
                message: `${Workouts.length} Workouts found`,
                data: Workouts
            });
        }else{
            return res.json({
                message: 'No Workouts found',
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