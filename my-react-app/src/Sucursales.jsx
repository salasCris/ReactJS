import "./Sucursales.css";

function Sucursales() {
  return (
    <div className="sucursales-container">
      <h2 className="sucursales-titulo">Sucursales Monster Energy</h2>

      <div className="sucursales-grid">
        {/* SUCURSAL 1 */}
        <div className="sucursal-card">
          <h3>Madrid</h3>
          <p>Calle Ejemplo 123</p>
        </div>

        {/* SUCURSAL 2 */}
        <div className="sucursal-card">
          <h3>Barcelona</h3>
          <p>Avenida Demo 45</p>
        </div>

        {/* SUCURSAL 3 */}
        <div className="sucursal-card">
          <h3>Valencia</h3>
          <p>Plaza Muestra 7</p>
        </div>

        {/* EJEMPLO SUCURSAL EXTRA */}
        <div className="sucursal-card">
          <h3>Sevilla</h3>
          <p>Calle Inventada 99</p>
        </div>
      </div>
    </div>
  );
}

export default Sucursales;
