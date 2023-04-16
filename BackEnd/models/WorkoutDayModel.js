import db from '../database/DB.js';
import ExerciseDayModel from './ExerciseDayModel.js';

import { DataTypes } from 'sequelize';

var WorkoutDayModel = db.define('workout_day', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
}, {freezeTableName: true,timestamps: false,underscored: false} );

WorkoutDayModel.hasMany(ExerciseDayModel, {foreignKey: 'workoutday' }, {as : 'exercisesDay'}, {onDelete: 'CASCADE'}, {onUpdate: 'CASCADE'})

export default WorkoutDayModel;