import "./RegistrarUsuario.css";

function RegistrarUsuario() {
  return (
    <div className="registro-usuario">
      <h3 className="registro-usuario__titulo">Registrar Usuario</h3>
        <form className="registro-usuario__form">
            <label>Id</label>
            <input type="number" name="Id" />
            <label>Username</label>
            <input type="text" name="Username" />
            <label>Email</label>
            <input type="email" name="Email" />
            <label>Password</label>
            <input type="password" name="Password" />
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
