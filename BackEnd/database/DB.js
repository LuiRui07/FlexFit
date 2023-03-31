import { Sequelize } from 'sequelize';

import config from 'dotenv';

config.config({ path: `.env`})

const UserDB = process.env.DB_USER;
const PassDB = process.env.DB_PASS;


const db = new Sequelize('flexfit', UserDB, PassDB, {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;