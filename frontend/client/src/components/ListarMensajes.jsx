import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

const obtenerMensajes = gql`
    {
        mensajes {
            _id
            autor
            contenido
            titulo
        }
    }        
`;

const ListarMensajes = () => {
    const { loading, error, data } = useQuery(obtenerMensajes)
        if (loading) return <p>Cargando mensaje...</p>
        if (error) return <p>Error al cargar los mensajes: {error.message}</p>

    const mensajes = data?.mensajes ?? []
    if (mensajes.length === 0) return <p>No hay mensajes para mostrar.</p>

    return(
        <div className="fila">
            <div className="col-md-6 offset-md-3">
                {
                    mensajes.map(({ _id, titulo, contenido, autor }) => (
                        <div key={_id} className='card m-2'>
                            <h4>{titulo}</h4>
                            <p>{contenido}</p>
                            <p>{autor}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default ListarMensajes;