import Mapa from "./Mapa";
import "./Sucursales.css";

function Sucursales() {
  // Coordenadas aproximadas para cada sucursal
  const sucursales = [
    {
      nombre: "Monster Energy México (Oficina Corporativa)",
      direccion: "Av. Paseo de la Reforma 250, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX",
      lat: 19.4296,
      lng: -99.1677
    },
    {
      nombre: "Walmart - Tepeyac",
      direccion: "Calz. de Guadalupe 431, Guadalupe Tepeyac, 07840 Ciudad de México, CDMX",
      lat: 19.4841,
      lng: -99.1172
    },
    {
      nombre: "OXXO - Díaz Mirón",
      direccion: "Calle Salvador Díaz Mirón 14, Santa María la Ribera, 06400 Ciudad de México, CDMX",
      lat: 19.4482,
      lng: -99.1527
    },
    {
      nombre: "7-Eleven - Insurgentes Centro",
      direccion: "Av. Insurgentes Centro 23, San Rafael, 06470 Ciudad de México, CDMX",
      lat: 19.4386,
      lng: -99.1522
    },
    {
      nombre: "Costco - Polanco",
      direccion: "Blvd. Miguel de Cervantes Saavedra 397, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX",
      lat: 19.4401,
      lng: -99.2022
    }
  ];

  return (
    <div className="sucursales-container">
      <h2 className="sucursales-titulo">
        Puntos de Venta Monster Energy en Ciudad de México
      </h2>

      <div className="sucursales-grid">
        {sucursales.map((sucursal, idx) => (
          <div className="sucursal-card" key={idx}>
            <h3>{sucursal.nombre}</h3>
            <p>{sucursal.direccion}</p>
            <div className="sucursal-mapa">
              <Mapa lat={sucursal.lat} lng={sucursal.lng} nombre_sucursal={sucursal.nombre} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sucursales;
