import "./Login.css";

function Login() {
  return (
    <section className="login">
      <h2 className="login__titulo">Iniciar Sesion</h2>
      <form className="login__form">
        <label htmlFor="username">Usuario</label>
        <input id="username" type="text" placeholder="Ingresa tu usuario" required />

        <label htmlFor="password">Contrasena</label>
        <input id="password" type="password" placeholder="Ingresa tu contrasena" required />

        <button type="submit" className="login__btn login__btn--acceder">
          Acceder
        </button>
      </form>

      <div className="login__extra">
        <button type="button" className="login__btn login__btn--secundario">
          Crear cuenta
        </button>
        <button type="button" className="login__btn login__btn--secundario">
          Recuperar contrasena
        </button>
      </div>
    </section>
  );
}

export default Login;
