import DayModel from "../models/DayModel.js"

//CREAR DIAS

export const createExercise = async (req, res) => {
    const { name} = req.body;
    try {
        let Day = await DayModel.findOne({
            where: {
                name
            }
        });
            let newDay = await DayModel.create({
                name
                
            }, {
                fields: ['name']
            });
            if (newExercise) {
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

//GET DIAS
export const getAllDays = async (req, res) => {
    try {
        let Days = await DayModel.findAll();
        if (Days) {
            return res.json({
                message: `${Days.length} Days found`,
                data: Days
            });
        }else{
            return res.json({
                message: 'No Days found',
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