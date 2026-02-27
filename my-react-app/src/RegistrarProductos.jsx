import "./RegistrarProductos.css";
import { useState } from "react";
import api from '/.Services/api'

function RegistrarProductos() {
    const [productos, setProductos] = useState({
        title: '',
        price: '',
        desvription: '',
        category: '',
        imagen: ''
    });

    const handleChange = (e) => {
        setProductos({
            ...productos,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/products', products);
            setProductos(response.data);
            alert('Producto registrado exitosamente');
            console.log(products)
            setProductos({
                title: '',
                price: '',
                desvription: '',
                category: '',
                imagen: ''
            })
        } catch (error) {
            console.error('Error al registrar el producto:', error);
        }
    };
    return (

        <div className="registro-productos">
            <h3 className="registro-productos__titulo">Registrar Productos</h3>
            <form onSubmit={handleSubmit} className="registro-productos__form">
                <label>Titulo:</label>
                <input type="text" name="titulo" />
                <label>Precio:</label>
                <input type="number" name="price" />
                <label>Descripcion:</label>
                <input type="text" name="description" />
                <label>Categoria:</label>
                <input type="text" name="category" />
                <label>Imagen:</label>
                <input type="text" name="imagen" />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
}

export default RegistrarProductos;
