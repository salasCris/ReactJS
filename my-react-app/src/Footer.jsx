import './Footer.css';

function Footer() {
    return (
        <footer className="Footer">
            <div className="footerLeft">
                <h3>Monster Energy</h3>
                <p>© 2026 Todos los derechos reservados</p>
                <p>Hecho con pasión para los gamers y deportistas</p>
            </div>
            <div className="footerRight">
                <div className="footerSection">
                    <h4>Enlaces</h4>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
                <div className="footerSection">
                    <h4>Síguenos</h4>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">TikTok</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
