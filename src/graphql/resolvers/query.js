import mensaje from "../../models/mensajes.js";

const Query = {
    mensajes: async () => {
       return await mensaje.find()
    },

    obtenerMensaje: async (_, {id}) => {
        return await mensaje.findById(id);
    }
}
export default Query;