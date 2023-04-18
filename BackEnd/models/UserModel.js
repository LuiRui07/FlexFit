import db from '../database/DB.js';
import WorkoutModel from './WorkoutModel.js';

import { DataTypes } from 'sequelize';

var UserModel = db.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    apellido1: { type: DataTypes.STRING, allowNull: false },
    apellido2: { type: DataTypes.STRING, allowNull: true },
    edad: { type: DataTypes.INTEGER, allowNull: false },
    altura: { type: DataTypes.INTEGER, allowNull: false },
    peso: { type: DataTypes.DOUBLE, allowNull: false },
    sexo: { type: DataTypes.CHAR, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: true },
}, {freezeTableName: true,timestamps: false,underscored: false} );

UserModel.hasMany(WorkoutModel, {foreignKey: 'user_id' }, {as : 'Workouts'}, {onDelete: 'CASCADE'}, {onUpdate: 'CASCADE'})


export default UserModel;