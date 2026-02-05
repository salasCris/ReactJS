import './ContenedorTargetas.css';
import monsterblack from './assets/monsterblack.jpg';
import monstergreen from './assets/monstergreen.jpg';
import monsterwhite from './assets/monsterwhite.jpg';
import monsterpink from './assets/mosnterpink.jpg';
import monsterdivenmedio from './assets/monsterdivenmedio.jpg';

function ContenedorTargetas() {
    return (
        <div className="ContenedorTargetas">
                      <div className="tarjetas">
                          <Tarjeta imagen={monsterblack} titulo="Monster Black" descripcion="Sabor intenso y oscuro. Potencia máxima con una fórmula energética completa. Perfecto para quienes buscan un boost sin compromisos." />
                          <Tarjeta imagen={monstergreen} titulo="Monster Ultra Paradise" descripcion="Un viaje tropical refrescante. Con sabor a frutas exóticas y cero azúcar, es ideal para disfrutar la energía sin culpa." />
                          <Tarjeta imagen={monsterwhite} titulo="Monster Zero Ultra" descripcion="Energía sin calorías ni azúcar. El mismo poder de Monster con menos impacto. La opción inteligente para estar siempre activo." />
                          <Tarjeta imagen={monsterpink} titulo="Monster Ultra Strawberry Dream" descripcion="Dulce y delicioso sabor a fresa. Energía refrescante con el toque frutal que amas. Sin azúcar, puro poder Monster." />
                      </div>
        </div>
    );
}

function Tarjeta(props) {
    return (
        <div className="tarjeta">
            <img src={props.imagen} alt={props.titulo} />
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>
        </div>
    );
}
export default ContenedorTargetas;