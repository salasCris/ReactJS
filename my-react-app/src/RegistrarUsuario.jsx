import { useState, useEffect} from "react";
import api from './Services/Api'
import "./RegistrarUsuario.css";


function RegistrarUsuario({usuarioEditado, limpiarSeleccion, onActualizacionExitosa}) {
  const[username, setUsername] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  
  useEffect(() => {
    if(usuarioEditado){
      setUsername(usuarioEditado.username);
      setEmail(usuarioEditado.email);
      setPassword(usuarioEditado.password);
    }else{
      resetForm();
    }
  },[usuarioEditado]);

  const resetForm =()=>{
    setUsername('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoUsuario = {username, email, password}
    try{
        if(usuarioEditado){
          const respuesta = await api.put(`/user/${usuarioEditado.id}`, nuevoUsuario);
          console.log('Usuario actualizado cheeeeeeee', respuesta.data);
          alert('Usuario actualizado con exito brooo');
          limpiarSeleccion();
        }else{
          const respuesta=await api.post('/users/', nuevoUsuario);
          console.log('Usuario Registrado consha su mare', respuesta.data);
          alert('Usuario Reagistrado cheeeeeeeck')
          resetForm();
        }
        if(onActualizacionExitosa) onActualizacionExitosa();

    }catch (error){
      console.error('Error al Registrar usuario cheeee', error);
      alert ('¡Error al procesar la solicitud cheeeeeeeee')
    }
  }

  return (
    <div className="registro-usuario">
      <h3 className="registro-usuario__titulo">Registrar Usuario</h3>
      <form onSubmit={handleSubmit} className="registro-usuario__form">
        {/* <label>Id</label>
        <input type="number" name="Id" /> */}
        <label>Username</label>
        <input type="text" name="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Email</label>
        <input type="email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="registro-usuario__acciones">
          <button type="button" className="registro-usuario__btn registro-usuario__btn--cancelar">Cancelar</button>
          <button type="submit" className="registro-usuario__btn registro-usuario__btn--registrar">Registrar</button>
        </div>

      </form>
    </div>
  )
}

export default RegistrarUsuario

// "id": 0,
// "username": "string",
// "email": "string",
// "password": "string"
