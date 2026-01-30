import './ContenedorTargetas.css';
import cafee from './assets/cafee.jpg';

function ContenedorTargetas() {
    return (
        <div className="ContenedorTargetas">
              <div className="tarjetasWrapper">
                  <div className="contenedorHorizontal">
                      <div className="tarjetas">
                          <Tarjeta />
                          <Tarjeta />
                          <Tarjeta />
                          <Tarjeta />
                      </div>
                  </div>
              </div>
        </div>
    );
}

function Tarjeta() {
    return (
        <div className="tarjeta">
            <img src={cafee} alt="cafee" />
            <h3>Título de la Tarjeta</h3>
            <p>Contenido de la tarjeta...</p>
        </div>
    );
}
export default ContenedorTargetas;