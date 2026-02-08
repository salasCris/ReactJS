import './ContenedorTargetas.css';
import PropTypes from 'prop-types';
import monstergreen from './assets/monstergreen.jpg';
import monsterwhite from './assets/monsterwhite.jpg';
import monsterpink from './assets/mosnterpink.jpg';
import AcercaDe from './AcercaDe.jsx';
import Productos from './Productos.jsx';
import Contactos from './Contactos.jsx';
import Galeria from './Galeria.jsx';
import Sucursales from './Sucursales.jsx';

function ContenedorTargetas({vista}) {
    const vistas = {
        "Inicio": <Inicio />,
        "AcercaDe": <AcercaDe />,
        "Productos": <Productos />,
        "Contactos": <Contactos />,
        "Galeria": <Galeria />,
        "Sucursales": <Sucursales />,
    }
    return (
        <div className="contenedorDiv">
            {vistas[vista] || vistas["Inicio"]}
        </div>
    );
}

function Inicio() {
    return (
    <>
        <div className="ContenedorTargetas">
            <div className="tarjetas">
                <Tarjeta imagen="https://i.pinimg.com/736x/bd/30/b7/bd30b736e54874603342af475c3840d4.jpg" titulo="Monster Black" descripcion="Sabor intenso y oscuro. Potencia máxima con una fórmula energética completa. Perfecto para quienes buscan un boost sin compromisos." />
                <Tarjeta imagen={monstergreen} titulo="Monster Ultra Paradise" descripcion="Un viaje tropical refrescante. Con sabor a frutas exóticas y cero azúcar, es ideal para disfrutar la energía sin culpa." />
                <Tarjeta imagen={monsterwhite} titulo="Monster Zero Ultra" descripcion="Energía sin calorías ni azúcar. El mismo poder de Monster con menos impacto. La opción inteligente para estar siempre activo." />
                <Tarjeta imagen={monsterpink} titulo="Monster Ultra Strawberry Dream" descripcion="Dulce y delicioso sabor a fresa. Energía refrescante con el toque frutal que amas. Sin azúcar, puro poder Monster." />
            </div>
        </div>
    </>
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
ContenedorTargetas.propTypes = {
    vista: PropTypes.string.isRequired,
};
export default ContenedorTargetas;