import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';

const Mensaje = gql`
    mutation CrearMensaje($titulo: String!, $contenido:String!, $autor:String!){
        crearMensaje(titulo: $titulo, contenido: $contenido, autor: $autor){
            _id
        }

    }

`

const MensajeForm = () => {
    const [contenido, setContenido] = useState('');
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [mensajeCreado] = useMutation(Mensaje);


    return(
        <div className='row'>
            <div className="col-md-6 offset-md-4">
                <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={async e => {
                            e.preventDefault();
                            await mensajeCreado({variables: {titulo, autor, contenido}})
                            window.location.href="/"
                        }}>
                            <div className='form-group'>
                                <input type="text" placeholder='Autor' className='form-control' value={autor} onChange={e => setAutor(e.target.value)}/>
                            </div>

                            <div className='form-group'>
                                <input type="text" placeholder='Escribe un titulo' className='form-control' value={titulo} onChange={e => setTitulo(e.target.value)} />
                            </div>

                            <div className='form-group'>
                                <textarea rows="2" placeholder='Contenido' className='form-control' value={contenido} onChange={e => setContenido(e.target.value)}></textarea>
                            </div>

                            <button className='btn btn-success btn-block'>
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MensajeForm;