import React, { useState, useEffect } from 'react';
import './App.css'

const App: React.FC = () => {
  const [instrumentos, setInstrumentos] = useState<any[]>([]);

  useEffect(() => {
    fetch('/instrumentos.json')
      .then(response => response.json())
      .then(data => setInstrumentos(data.instrumentos))
      .catch(error => console.error('Error fetching instrumentos:', error));
  }, []);

  return (
    <div>
      <h1>Listado de Instrumentos</h1>
      <ul>
        {instrumentos.map((instrumento: any) => (
          <li key={instrumento.id} className="card">
            <div className="imagen">
              <img src={`./img/${instrumento.imagen}`} alt={instrumento.instrumento} />
            </div>
            <div className='description'>
              <div>
                <p className="title">{instrumento.instrumento}</p>
                  <div>
                    <p className="price">Precio: ${instrumento.precio}</p>
                  </div>
                <p className="descripcion">{instrumento.descripcion}</p>
              </div>
              <div>
                  <div className='camion'>
                    <img src={`./img/camion.png`} alt="" />
                    {instrumento.costoEnvio === 'G' ? (
                      <p>Envío: Envío gratis a todo el país</p>
                    ) : (
                      <p>Envío: ${instrumento.costoEnvio}</p>
                    )}
                  </div>
                  <p className='cant'>Cantidad Vendida: {instrumento.cantidadVendida}</p>
              </div>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
  
};
//TODO: Dividir el programa en mas componentes
export default App;
