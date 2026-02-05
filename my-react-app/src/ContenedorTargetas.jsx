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
                          <Tarjeta imagen={monsterblack} nombre="Monster Black" />
                          <Tarjeta imagen={monstergreen} nombre="Monster Ultra Paradise" />
                          <Tarjeta imagen={monsterwhite} nombre="Monster Zero Ultra" />
                          <Tarjeta imagen={monsterpink} nombre="Monster Ultra Struberry Dream" />
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

function Tarjeta({ imagen, nombre }) {
    return (
        <div className="tarjeta">
            <img src={imagen} alt={nombre} />
            <h3>{nombre}</h3>
            <p>Contenido de la tarjeta...</p>
        </div>
    );
}
export default ContenedorTargetas;