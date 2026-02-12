import './AcercaDe.css';

function AcercaDe() {
    return (
        <div className="acerca-container">
            <h2 className="acerca-titulo">Acerca de Monster Energy</h2>

            <p className="acerca-texto">
                <strong>Monster Energy</strong> es una de las bebidas energéticas
                más reconocidas a nivel mundial. Destaca por su identidad audaz,
                su diseño impactante y su fuerte conexión con los deportes extremos,
                la música, los esports y la cultura urbana.
            </p>

            <p className="acerca-texto">
                Su fórmula contiene <em>cafeína</em>, <em>taurina</em> y vitaminas
                del complejo B, ingredientes diseñados para aumentar la energía,
                mejorar la concentración y potenciar el rendimiento físico y mental.
            </p>

            <div className="acerca-seccion">
                <h3 className="acerca-subtitulo">🎯 Misión</h3>
                <p className="acerca-texto">
                    Impulsar a las personas a superar sus límites, ofreciendo
                    bebidas energéticas de alta calidad que acompañen un estilo
                    de vida activo, dinámico y apasionado.
                </p>
            </div>

            <div className="acerca-seccion">
                <h3 className="acerca-subtitulo">🚀 Visión</h3>
                <p className="acerca-texto">
                    Ser la marca líder mundial en bebidas energéticas,
                    inspirando a nuevas generaciones a vivir con intensidad,
                    innovación y actitud desafiante.
                </p>
            </div>

            <div className="acerca-seccion">
                <h3 className="acerca-subtitulo">⚡ Valores</h3>
                <p className="acerca-texto">
                    Pasión, autenticidad, innovación y compromiso con la cultura
                    deportiva y urbana. Monster Energy apoya talentos emergentes
                    y eventos internacionales que representan adrenalina y creatividad.
                </p>
            </div>

            <small className="acerca-aviso">
                Consumir con moderación. No recomendado para niños, mujeres
                embarazadas o personas sensibles a la cafeína.
            </small>
        </div>
    );
}

export default AcercaDe;
