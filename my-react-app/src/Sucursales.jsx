import "./Sucursales.css";

function Sucursales() {
  return (
     <div className="sucursales-container">
      <h2 className="sucursales-titulo">Puntos de Venta Monster Energy</h2>

      <div className="sucursales-grid">
        <div className="sucursal-card">
          <h3>Eneryeti Company (Madrid)</h3>
          <p>Av. del General Perón, 32, 1º Izq, 28020 Madrid, España</p>
        </div>

        <div className="sucursal-card">
          <h3>Birra Birrae Distribució (Barcelona)</h3>
          <p>Carrer de la Selva de Mar, 241, 08020 Barcelona, España</p>
        </div>

        <div className="sucursal-card">
          <h3>Super 24 Horas (Barcelona)</h3>
          <p>Carrer de Tarragona, 131U, 08014 Barcelona, España</p>
        </div>

        <div className="sucursal-card">
          <h3>Supermercados con Monster</h3>
          <p>Carrefour, El Corte Inglés y Dia – disponibles en varias ciudades de España</p>
        </div>
      </div>
    </div>
  );
}

export default Sucursales;
