import './ContenedorTargetas.css';
import PropTypes from 'prop-types';
import monstergreen from './assets/monstergreen.jpg';
import monsterwhite from './assets/monsterwhite.jpg';
import monsterpink from './assets/mosnterpink.jpg';
import AcercaDe from './AcercaDe.jsx';
import Productos from './Productos.jsx';
import Contactos from './Contactos.jsx';
import Atletas from './Atletas.jsx';
import Sucursales from './Sucursales.jsx';
import Mapa from './Mapa';
import Carrito from './Carrito.jsx';
import Usuario from './UsuariosTabla.jsx';

function ContenedorTargetas({vista}) {
    const vistas = {
        "Inicio": <Inicio />,
        "AcercaDe": <AcercaDe />,
        "Productos": <Productos />,
        "Contactos": <Contactos />,
        "Atletas": <Atletas />,
        "Sucursales": <Sucursales />,
        "Carrito": <Carrito />,
        "Usuarios": <Usuario />,
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
                <Tarjeta
                    imagen="https://i.pinimg.com/736x/bd/30/b7/bd30b736e54874603342af475c3840d4.jpg"
                    titulo="Monster Black"
                    descripcion="Sabor intenso y oscuro. Potencia máxima con una fórmula energética completa. Perfecto para quienes buscan un boost sin compromisos."
                    lat={19.4296}
                    lng={-99.1677}
                />
                <Tarjeta
                    imagen={monstergreen}
                    titulo="Monster Ultra Paradise"
                    descripcion="Un viaje tropical refrescante. Con sabor a frutas exóticas y cero azúcar, es ideal para disfrutar la energía sin culpa."
                    lat={19.4841}
                    lng={-99.1172}
                />
                <Tarjeta
                    imagen={monsterwhite}
                    titulo="Monster Zero Ultra"
                    descripcion="Energía sin calorías ni azúcar. El mismo poder de Monster con menos impacto. La opción inteligente para estar siempre activo."
                    lat={19.4482}
                    lng={-99.1527}
                />
                <Tarjeta
                    imagen={monsterpink}
                    titulo="Monster Ultra Strawberry Dream"
                    descripcion="Dulce y delicioso sabor a fresa. Energía refrescante con el toque frutal que amas. Sin azúcar, puro poder Monster."
                    lat={19.4386}
                    lng={-99.1522}
                />
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
            <div style={{width:'100%', height:'200px', marginTop:'10px'}}>
                <Mapa lat={props.lat} lng={props.lng} nombre_sucursal={props.titulo} />
            </div>
        </div>
    );
}
ContenedorTargetas.propTypes = {
    vista: PropTypes.string.isRequired,
};
export default ContenedorTargetas;