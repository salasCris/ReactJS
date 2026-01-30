import miLogo from './assets/logoo.jpg';
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
        </div>
    );
}

function Logo() {
    return (
        <div className='LogoDiv'>
            <img src={miLogo} alt="React Logo" />
        </div>
    );
}

function Menu() {
    return (
        <div className='menuDiv'>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contactos</a></li>
                <li><a href="#">Galeria</a></li>
                <li><a href="#">Sucursales</a></li>
            </ul>
        </div>
    );
}

function Redes(){
    return (
        <div className='redesDiv'>
            <ul>
                <li className="redes"> <a href="#"> <img src={facebook} alt="Logo de Facebook" /></a></li>
                <li className="redes"> <a href="#"> <img src={instagram} alt="Logo de Instagram" /></a></li>
                <li className="redes"> <a href="#"> <img src={telegrama} alt="Logo de Telegrama" /></a></li>
                <li className="redes"> <a href="#"> <img src={tiktok} alt="Logo de Tiktok" /></a></li>
            </ul>
        </div>
    );
}
    export default Encabezado;
