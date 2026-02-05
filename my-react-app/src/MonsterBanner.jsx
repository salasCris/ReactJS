import './MonsterBanner.css';
import monsterdivenmedio from './assets/monsterdivenmedio.jpg';

function MonsterBanner() {
    return (
        <div className="monsterBanner" style={{backgroundImage: `url(${monsterdivenmedio})`}}>
            <div className="monsterContent">
                <h2>Monster Energy</h2>
                <p>Descubre la potencia y energía de Monster Energy. Con su fórmula única de vitaminas, cafeína y aminoácidos, Monster Energy te proporciona el boost que necesitas para conquistar cualquier desafío. Perfecto para deportes, gaming y actividades intensas.</p>
            </div>
        </div>
    );
}

export default MonsterBanner;
