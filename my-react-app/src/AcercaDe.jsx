import './AcercaDe.css';
function AcercaDe() {
    return (
        <div className="acerca-container">
            <h2 className="acerca-titulo">Acerca de Monster Energy</h2>

            <p className="acerca-texto">
                <strong>Monster Energy</strong> es una de las bebidas energéticas
                más populares a nivel mundial, reconocida por su imagen audaz
                y su vínculo con los deportes extremos, la música y la cultura urbana.
            </p>

            <p className="acerca-texto">
                Su fórmula incluye <em>cafeína</em>, <em>taurina</em> y vitaminas
                del complejo B, ingredientes que ayudan a aumentar la energía,
                la concentración y el rendimiento físico y mental.
            </p>

            <p className="acerca-texto">
                Más que una bebida, Monster Energy representa un estilo de vida.
                La marca patrocina competencias de motocross, skate, esports y
                eventos musicales, conectando con personas activas y apasionadas.
            </p>

            <small className="acerca-aviso">
                Consumir con moderación. No recomendado para niños ni personas
                sensibles a la cafeína.
            </small>
        </div>
    );
}

export default AcercaDe;
