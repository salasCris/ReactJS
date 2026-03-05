import { useState, useEffect } from "react";
import api from './Services/Api';
import "./RegistrarProductos.css";

function RegistrarProductos({ productoEditado, limpiarSeleccion, onActualizacionExitosa }) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        if (productoEditado) {
            setTitle(productoEditado.title || '');
            setPrice(productoEditado.price || '');
            setDescription(productoEditado.description || '');
            setCategory(productoEditado.category || '');
            setImage(productoEditado.image || '');
        } else {
            resetForm();
        }
    }, [productoEditado]);

    const resetForm = () => {
        setTitle('');
        setPrice('');
        setDescription('');
        setCategory('');
        setImage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevoProducto = { title, price: Number(price), description, category, image };

        try {
            if (productoEditado) {
                const respuesta = await api.put(`/products/${productoEditado.id}`, nuevoProducto);
                console.log('Producto actualizado', respuesta.data);
                alert('Producto actualizado con exito');
                if (limpiarSeleccion) limpiarSeleccion();
                resetForm();
            } else {
                const respuesta = await api.post('/products', nuevoProducto);
                console.log('Producto registrado', respuesta.data);
                alert('Producto registrado con exito');
                resetForm();
            }

            if (onActualizacionExitosa) onActualizacionExitosa();
        } catch (error) {
            console.error('Error al procesar producto', error);
            alert('Error al procesar la solicitud');
        }
    };

    return (
        <div className="registro-productos">
            <h3 className="registro-productos__titulo">{productoEditado ? 'Editar Producto' : 'Registrar Producto'}</h3>
            <form onSubmit={handleSubmit} className="registro-productos__form">
                <label>Titulo:</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />

                <label>Precio:</label>
                <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />

                <label>Descripcion:</label>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />

                <label>Categoria:</label>
                <input type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} />

                <label>Imagen:</label>
                <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} />

                <button type="button" className="registro-productos__btn registro-productos__btn--cancelar" onClick={() => {
                    resetForm();
                    if (limpiarSeleccion) limpiarSeleccion();
                }}>
                    Cancelar
                </button>

                <button type="submit" className="registro-productos__btn registro-productos__btn--registrar">
                    {productoEditado ? 'Actualizar' : 'Registrar'}
                </button>
            </form>
        </div>
    );
}

export default RegistrarProductos;
