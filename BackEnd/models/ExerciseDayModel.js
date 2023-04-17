import db from '../database/DB.js';
import ExerciseModel from './ExerciseModel.js';

import { DataTypes } from 'sequelize';

var ExerciseDayModel = db.define('dayexercise', {
    idExercise: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    reps: { type: DataTypes.INTEGER, allowNull: false },
    weight: { type: DataTypes.INTEGER, allowNull: false },
    series: { type: DataTypes.INTEGER, allowNull: false },
}, {freezeTableName: true,timestamps: false,underscored: false});


ExerciseDayModel.hasOne(ExerciseModel, {foreignKey: 'id' }, {as: 'exercise'} , {onDelete: 'NO ACTION'}, {onUpdate: 'NO ACTION'})

export default ExerciseDayModel;