import React from 'react';
import { Link } from 'react-router-dom';

export const Navegacion = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">GraphQlReact</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Mensajes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="nuevo-mensaje">Nuevo Mensaje</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}