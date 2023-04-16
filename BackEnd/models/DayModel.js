import db from '../database/DB.js';

import { DataTypes } from 'sequelize';

var DayModel = db.define('workout_day', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
}, {freezeTableName: true} );

export default DayModel;