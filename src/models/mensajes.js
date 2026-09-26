import { Schema, model } from 'mongoose';

const mensajeSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    contenido: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    }
});

export default model('mensaje', mensajeSchema);