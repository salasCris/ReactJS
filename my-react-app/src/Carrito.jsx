import './Carrito.css';
import { useEffect, useState } from 'react';
import api from './Services/api';

function Carrito() {
  const [carritos, setCarritos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState({});

  useEffect(() => {
    const obtenerCarritos = async () => {
      try {
        const response = await api.get('/carts');
        setCarritos(response.data);
        // Obtener productos unicos
        const ids = Array.from(new Set(response.data.flatMap((c) => c.products.map((p) => p.productId))));
        // Obtener detalles de productos
        const prods = {};
        for (const id of ids) {
          const res = await api.get(`/products/${id}`);
          prods[id] = res.data;
        }
        setProductos(prods);
      } catch (error) {
        console.error('error al obtener carritos', error);
      } finally {
        setCargando(false);
      }
    };
    obtenerCarritos();
  }, []);

  if (cargando) return <p>Cargando carritos.......</p>;

  return (
    <div className="carritos">
      <h1>Carrito de compras</h1>
      {carritos.map((carrito) => (
        <div className="carrito-card" key={carrito.id}>
          <div className="carrito-id">{carrito.id}</div>
          <div className="carrito-fecha">{carrito.date}</div>
          <div className="carrito-productos-titulo">Productos</div>
          <ul className="carrito-lista">
            {carrito.products.map((prod, idx) => (
              <li key={idx} className="carrito-item">
                <span>
                  Producto #{prod.productId} - Cantidad: {prod.quantity}
                </span>
                <button type="button" className="carrito-item-x" aria-label={`Eliminar producto ${prod.productId}`}>
                  X
                </button>
              </li>
            ))}
          </ul>
          <button type="button" className="comprar">
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
}

export default Carrito;
