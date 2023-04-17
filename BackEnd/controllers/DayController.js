import WorkoutDayModel from "../models/WorkoutDayModel.js"
import WorkoutModel from "../models/WorkoutModel.js";

//CREAR DIAS

export const createDay = async (req, res) => {
    const { name, routineId } = req.body;
    try {
        let newDay = await WorkoutDayModel.create({
            name,
            routineId
        }, {
            fields: ['name', 'routineId']
        });
        if (newDay) {
            return res.json({
                message: 'Day created successfully',
                data: newDay
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

//OBTENER TODOS LOS DIAS
export const getAllDays = async (req, res) => {
    try {
        const days = await WorkoutDayModel.findAll({
            include: []
        });
        res.json({
            data: days,
            
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

//OBTENER UN DIA
export const getOneDay = async (req, res) => {
    try {
        const { id } = req.params;
        const day = await WorkoutDayModel.findOne({
            where: {
                id
            }
        });
        res.json({
            data: day
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

//OBTENER DIAS POR RUTINA
export const getDayByRoutine = async (req, res) => {
    try {
        const { routineId } = req.params;
        const days = await WorkoutDayModel.findAll({
            where: {
                routineId
            }
        });
        res.json({
            data: days
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

//ACTUALIZAR DIAS
export const updateDay = async (req, res) => {
    const { id } = req.params;
    const { name, routineId } = req.body;
    try {
        let day = await WorkoutDayModel.findOne({
            where: {
                id
            }
        });
        if (day) {
            await day.update({
                name,
                routineId
            }, {
                fields: ['name', 'routineId']
            });
            return res.json({
                message: 'Day updated successfully',
                data: day
            });
        }else{
            return res.json({
                message: 'No Day found',
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


//ELIMINAR DIAS
export const deleteDay = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRowCount = await WorkoutDayModel.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Day deleted successfully',
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
