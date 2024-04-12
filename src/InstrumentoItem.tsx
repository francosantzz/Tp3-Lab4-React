import { Instrumento } from "./entities/instrumento";
const InstrumentoItem: React.FC<Instrumento> = ({ instrumento, cantidadVendida,    costoEnvio, descripcion, imagen, precio}) => {
    return (
      <li className="card">
        <div className="imagen">
          <img src={`./img/${imagen}`} alt={instrumento} />
        </div>
        <div className='description'>
          <div>
            <p className="title">{instrumento}</p>
            <div>
              <p className="price">Precio: ${precio}</p>
            </div>
            <p className="descripcion">{descripcion}</p>
          </div>
          <div>
            <div className='camion'>
              <img src={`./img/camion.png`} alt="" />
              {costoEnvio === 'G' ? (
                <p>Envío: Envío gratis a todo el país</p>
              ) : (
                <p>Envío: ${costoEnvio}</p>
              )}
            </div>
            <p className='cant'>Cantidad Vendida: {cantidadVendida}</p>
          </div>
        </div>
      </li>
    );
  };
  export default InstrumentoItem;