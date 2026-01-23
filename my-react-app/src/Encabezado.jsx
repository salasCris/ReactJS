import miLogo from './assets/logoo.png';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import telegrama from './assets/telegrama.png';
import tiktok from './assets/tiktok.png';
import './Encabezado.css';
function Encabezado() {
    return (
        <div className="Encabezado">
            <Logo />
            <Menu />
            <Redes />
            <h2>Bienvenido a mi sitio</h2>
        </div>
    );
}

function Logo() {
    return (
        <div className='Logo'>
            <img src={miLogo} alt="React Logo" />
        </div>
    );
}

function Menu() {
    return (
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contactos</li>
                <li>Sucursales</li>
            </ul>
        </nav>
    );
}

function Redes(){
    return (
        <nav>
            <ul>
                <li className="redes"> <img src={facebook} alt="Logo de Facebook" /></li>
                <li className="redes"> <img src={instagram} alt="Logo de Instagram" /></li>
                <li className="redes"> <img src={telegrama} alt="Logo de Telegrama" /></li>
                <li className="redes"> <img src={tiktok} alt="Logo de Tiktok" /></li>
            </ul>
        </nav>
    );
}
    export default Encabezado;
