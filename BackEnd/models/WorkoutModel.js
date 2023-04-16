import db from '../database/DB.js';

import { DataTypes } from 'sequelize';
import WorkoutDayModel from './WorkoutDayModel.js';

var WorkoutModel = db.define('workout', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    last_time: { type: DataTypes.DATE, allowNull: true },
    favorite: { type: DataTypes.BOOLEAN, allowNull: false },
    difficulty: { type: DataTypes.STRING, allowNull: false },
    user_id: { type: DataTypes.INTEGER, allowNull: false }
}, {freezeTableName: true,timestamps: false,underscored: false});

WorkoutModel.hasMany(WorkoutDayModel, {foreignKey: 'workout_id' }, {as : 'WorkoutDays'}, {onDelete: 'CASCADE'}, {onUpdate: 'CASCADE'})

export default WorkoutModel;