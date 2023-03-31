import db from '../database/DB.js';

import { DataTypes } from 'sequelize';

var BodyPartModel = db.define('bodypart', {
    idBodyPart: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
}, {freezeTableName: true} );

export default BodyPartModel;