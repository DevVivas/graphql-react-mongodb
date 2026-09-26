import mensaje from "../../models/mensajes.js";

const Mutation = {
    crearMensaje: async (_, {titulo, contenido, autor}) => {
        const nuevoMensaje = new mensaje({titulo, contenido, autor});
        return await nuevoMensaje.save();
    },
};
export default Mutation;