import './ContenedorTargetas.css';
import monsterblack from './assets/monsterblack.jpg';
import monstergreen from './assets/monstergreen.jpg';
import monsterwhite from './assets/monsterwhite.jpg';
import monsterpink from './assets/mosnterpink.jpg';
import monsterdivenmedio from './assets/monsterdivenmedio.jpg';

function ContenedorTargetas() {
    return (
        <div className="ContenedorTargetas">
              <div className="tarjetasWrapper">
                  <div className="contenedorHorizontal">
                      <div className="tarjetas">
                          <Tarjeta imagen={monsterblack} />
                          <Tarjeta imagen={monstergreen} />
                          <Tarjeta imagen={monsterwhite} />
                          <Tarjeta imagen={monsterpink} />
                      </div>
                  </div>
              </div>
              <div className="monsterBanner" style={{backgroundImage: `url(${monsterdivenmedio})`}}>
                  <div className="monsterContent">
                      <h2>Monster Energy</h2>
                      <p>Descubre la potencia y energía de Monster Energy. Con su fórmula única de vitaminas, cafeína y aminoácidos, Monster Energy te proporciona el boost que necesitas para conquistar cualquier desafío. Perfecto para deportes, gaming y actividades intensas.</p>
                  </div>
              </div>
        </div>
    );
}

function Tarjeta({ imagen }) {
    return (
        <div className="tarjeta">
            <img src={imagen} alt="Monster Energy" />
            <h3>Título de la Tarjeta</h3>
            <p>Contenido de la tarjeta...</p>
        </div>
    );
}
export default ContenedorTargetas;