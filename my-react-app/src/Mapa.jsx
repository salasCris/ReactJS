import {GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

function Mapa({lat = 19.4326, lng = -99.1332, nombre_sucursal = ''}){
    const {isLoaded, loadError} = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    })

    if(loadError) return <div>Error al cargar el mapa</div>
    if(!isLoaded) return <div>Cargando mapa...</div>

    const center = {lat, lng}
    return(
        <div style={{width: '100%', height: '100%'}}>
            {nombre_sucursal && <h3 style={{margin:0, padding:'6px 8px'}}>{nombre_sucursal}</h3>}
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16}
            >
                <Marker position={center}/>
            </GoogleMap>
        </div>
    )
}

export default Mapa;

