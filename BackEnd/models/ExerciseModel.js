import db from '../database/DB.js';
import BodyPartModel from './BodyPartModel.js';

import { DataTypes } from 'sequelize';

var ExerciseModel = db.define('exercise', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
    bodyPart: { type: DataTypes.INTEGER, allowNull: false , references: {
        model: BodyPartModel,
        key: 'idBodyPart'
    }},
}, {freezeTableName: true} );

//ExerciseModel.hasOne(BodyPartModel, {foreignKey: "idBodyPart" },{as : "BodyPart"})


export default ExerciseModel;