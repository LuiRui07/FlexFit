import db from '../database/DB.js';
import ExerciseModel from './ExerciseModel.js';

import { DataTypes } from 'sequelize';

var ExerciseDayModel = db.define('dayexercise', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    reps: { type: DataTypes.INTEGER, allowNull: false },
    weight: { type: DataTypes.INTEGER, allowNull: false },
}, {freezeTableName: true,timestamps: false,underscored: false});


ExerciseDayModel.hasOne(ExerciseModel, {foreignKey: 'id' }, {as: 'Exercise'} , {onDelete: 'NO ACTION'}, {onUpdate: 'NO ACTION'})

export default ExerciseDayModel;