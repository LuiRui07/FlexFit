import WorkoutDayModel from "../models/WorkoutDayModel.js"

//CREAR DIAS

export const createDay = async (req, res) => {
    const { name, workout_id } = req.body;
    try {
        let newDay = await WorkoutDayModel.create({
            name,
            workout_id
        }, {
            fields: ['name', 'workout_id']
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
            include: [{all: true}]
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
            },
            include: [{all: true}]
        });
        if(day) {
            res.json({
                data: day
            });
        } else {
            res.status(404).json({
                message: 'Day not found',
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

//OBTENER DIAS POR RUTINA
export const getDayByRoutine = async (req, res) => {
    try {
        const { routineId } = req.params;
        const days = await WorkoutDayModel.findAll({
            where: {
                routineId
            },
            include: [{all: true,nested: true}]
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
        console.log(id)
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

