import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListarMensajes from './components/ListarMensajes';
import MensajeForm from './components/MensajeForm';
import 'bootswatch/dist/litera/bootstrap.min.css';
import { Navegacion } from './components/Navbar';

function App() {
    const [count, setCount] = useState(0)

    return (
        <Router>
            <Navegacion/>
            <div className="container p-4">
                <Routes>
                    <Route path='/' element={<ListarMensajes />} />
                    <Route path='/nuevo-mensaje' element={<MensajeForm />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App