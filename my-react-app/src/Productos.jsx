// import monstergreen from './assets/monstergreen.jpg';
// import monsterwhite from './assets/monsterwhite.jpg';
// import monsterpink from './assets/mosnterpink.jpg';
import './Productos.css';
import { useEffect, useState } from 'react';
import api from './Services/Api';
import RegistrarProductos from './RegistrarProductos';

function Productos() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    useEffect(() => {
        const obtenerProductos = async () => {
            try{
                const response = await api.get('/products');
                setProductos(response.data);
            }catch(error){
                console.error('error al obtener productos', error);
            }finally{
                setCargando(false);
            }
        };
        obtenerProductos();
    },[]);

    if(cargando) return <p>Cargando productos.......</p>

    return (
        <div className="productos">
            <RegistrarProductos />
            <h2>Catálogo de Productos</h2>
            {productos.map((producto) => (
                <div className="producto" key={producto.id}>
                    <img src={producto.image} alt={producto.title} />
                    <h3>{producto.title}</h3>
                    <p>{producto.description ? producto.description : 'Sin descripción'}</p>
                    <p className="precio">${producto.price}</p>
                    <button>Añadir al carrito</button>
                </div>
            ))}
        </div>
        // <div>
        //     <h2>Productos</h2>

        //     <div className="productos">
        //         <div className="producto">
        //             <img src="https://i.pinimg.com/736x/bd/30/b7/bd30b736e54874603342af475c3840d4.jpg" alt="Monster Energy Original" />
        //             <h3>Monster Energy Original</h3>
        //             <p>Bebida energética clásica que ayuda a aumentar la energía y la concentración.</p>
        //             <p className="precio">$60 MXN</p>
        //             <button>Añadir al carrito</button>
        //         </div>

        //         <div className="producto">
        //             <img src="https://m.media-amazon.com/images/I/61C5Oe-4RYL._AC_UF350,350_QL80_.jpg" alt="Monster Black" />
        //             <h3>Monster Black</h3>
        //             <p>Sabor intenso con un perfil fuerte y audaz para un impulso extra.</p>
        //              <p className="precio">$130 MXN</p>
        //             <button>Añadir al carrito</button>
        //         </div>

        //         <div className="producto">
        //             <img src={monstergreen} alt="Monster Ultra Paradise" />
        //             <h3>Monster Ultra Paradise</h3>
        //             <p>Bebida sin azúcar con un refrescante sabor tropical.</p>
        //              <p className="precio">$80 MXN</p>
        //             <button>Añadir al carrito</button>
        //         </div>

        //         <div className="producto">
        //             <img src={monsterwhite} alt="Monster Zero Ultra" />
        //             <h3>Monster Zero Ultra</h3>
        //             <p>Ligera, sin azúcar y con un sabor suave y refrescante.</p>
        //              <p className="precio">$70 MXN</p>
        //             <button>Añadir al carrito</button>
        //         </div>

        //         <div className="producto">
        //             <img src={monsterpink} alt="Monster Ultra Strawberry Dream" />
        //             <h3>Monster Ultra Strawberry Dream</h3>
        //             <p>Delicioso sabor a fresa con un toque cremoso y sin azúcar.</p>
        //              <p className="precio">$80 MXN</p>
        //             <button>Añadir al carrito</button>
        //         </div>

        //         <div className="producto">
        //             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqeFiKfsYbjpFRADhFuZ6YqebZG46IcZgQrg&s" alt="Monster Mango Loco" />
        //             <h3>Monster Mango Loco</h3>
        //             <p>Mezcla tropical de mango con un sabor dulce y jugoso.</p>
        //              <p className="precio">$80 MXN</p>
        //             <button>Añadir al carrito</button>
        //         </div>

        //         <div className="producto">
        //             <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2025/10/15/2bc86bd9-fce1-435f-b706-aac373f49994_31982.jpg" alt="Monster Pipeline Punch" />
        //             <h3>Monster Pipeline Punch</h3>
        //             <p>Combinación de frutas tropicales inspirada en el surf.</p>
        //              <p className="precio">$130 MXN</p>
        //             <button>Añadir al carrito</button>
        //         </div>

        //         <div className="producto">
        //             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwfHazbea_qIL_ra5eIyZjUflrnGNbGQvvTg&s" alt="Monster Lewis Hamilton Edition" />
        //             <h3>Monster Lewis Hamilton Edition</h3>
        //             <p>Edición especial con diseño exclusivo y sabor único.</p>
        //              <p className="precio">$400 MXN</p>
        //             <button>Añadir al carrito</button>
        //         </div>

        //         <div className="producto">
        //             <img
        //                 src="https://http2.mlstatic.com/D_NQ_NP_883013-MLM71249029323_082023-O.webp"  alt="Monster Energy Pacific Punch"
        //             />
        //             <h3>Monster Energy Pacific Punch</h3>
        //             <p>
        //                 Bebida energética con una mezcla refrescante de frutas tropicales,
        //                 inspirada en las playas del Pacífico.
        //             </p>
        //              <p className="precio">$200 MXN</p>
        //             <button>Añadir al carrito</button>
        //         </div>

        //     </div>
        // </div>
    );
}

export default Productos;
