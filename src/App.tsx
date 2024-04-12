import React, { useState, useEffect } from 'react';
import './App.css'
import InstrumentoItem from './InstrumentoItem';
import { Instrumento } from './entities/instrumento';

const App: React.FC = () => {
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

  useEffect(() => {
    fetch('/instrumentos.json')
      .then(response => response.json())
      .then(data => setInstrumentos(data.instrumentos))
      .catch(error => console.error('Error fetching instrumentos:', error));
  }, []);

  return (
    <div>
    <h1 className='listado'>Listado de Instrumentos</h1>
    <ul>
      {instrumentos.map((instrumento: Instrumento) => (
        <InstrumentoItem key={instrumento.id} 
        instrumento={instrumento.instrumento}
        cantidadVendida={instrumento.cantidadVendida}
        costoEnvio={instrumento.costoEnvio}
        descripcion={instrumento.descripcion}
        id={instrumento.id}
        imagen={instrumento.imagen}
        marca={instrumento.marca}
        modelo={instrumento.modelo}
        precio={instrumento.precio}
        />
      ))}
    </ul>
  </div>
  );
  
};
//TODO: Dividir el programa en mas componentes
export default App;
