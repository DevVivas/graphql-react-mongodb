import { server } from "./server.js";
import { createServer } from 'node:http';
import { config } from 'dotenv'; config();
import conexionDB from './db.js';

const port = process.env.PORT;

try {
    await conexionDB;

    createServer(server).listen(port, () => {
        console.log(`Server en puerto ${port} - http://localhost:${port}/`);
    });
} catch (error) {
    console.error('No se pudo conectar a MongoDB');
    console.error(error.message);
    process.exitCode = 1;
}