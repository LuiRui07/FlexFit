import db from '../database/DB.js';
import BodyPartModel from './BodyPartModel.js';

import { DataTypes } from 'sequelize';

var ExerciseModel = db.define('exercise', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
}, {freezeTableName: true} );

ExerciseModel.hasOne(BodyPartModel, {foreignKey: 'idBodyPart' },{as : 'bodyPart'}, {onDelete: 'NO ACTION'}, {onUpdate: 'NO ACTION'})


export default ExerciseModel;