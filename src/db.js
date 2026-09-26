import mongoose from 'mongoose';
import { config } from 'dotenv'; config();

const portdb = process.env.DBPORT;
const conexionDB = mongoose.connect(`mongodb://${portdb}/graphql-react-mongodb`)
    .then(() => console.log('Base de datos corriendo'));

export default conexionDB;