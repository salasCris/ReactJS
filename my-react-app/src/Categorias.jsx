import { useEffect, useState } from 'react';
import './Categorias.css';

const FALLBACK_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

function Categorias() {
    const [categorias, setCategorias] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                setError('');
                const url = import.meta.env.VITE_THEMEALDB_API_KEY || FALLBACK_URL;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Error al obtener categorias');
                }
                const data = await response.json();
                setCategorias(Array.isArray(data?.categories) ? data.categories : []);
            } catch (err) {
                console.error('error al obtener categorias', err);
                setError('No se pudieron cargar las categorias');
            } finally {
                setCargando(false);
            }
        };
        fetchCategorias();
    }, []);

    if (cargando) return <p>Cargando categorias.......</p>;
    if (error) return <p className="categorias-error">{error}</p>;

    return (
        <div className="categorias">
            <h2>Categorias</h2>
            {categorias.map((categoria) => (
                <div className="categoria" key={categoria.idCategory}>
                    <img src={categoria.strCategoryThumb} alt={categoria.strCategory} />
                    <h3>{categoria.strCategory}</h3>
                    <p>{categoria.strCategoryDescription || 'Sin descripcion'}</p>
                </div>
            ))}
        </div>
    );
}

export default Categorias;
