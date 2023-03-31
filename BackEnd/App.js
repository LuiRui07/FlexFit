import express from 'express';
import cors from 'cors';

import db from './database/DB.js';

import UserRoutes from './routes/UserRoutes.js';
import ExerciseRoutes from './routes/ExerciseRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/user', UserRoutes);
app.use('/api/exercise', ExerciseRoutes);

try{
    db.authenticate();
    console.log('Database Connected');

}catch (error){
    console.log('Database Not Connected');
    console.log(error);
}

app.listen(7777, () => {
    console.log('Backend Server Running on http://localhost:7777');
});