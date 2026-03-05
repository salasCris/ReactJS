import './Login.css';
import { useState } from 'react';
import api from './Services/Api';

function Login({ onLoginExitoso }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setError('');
      const response = await api.post('/auth/login', {
        username,
        password,
      });

      const token = response.data.token;
      localStorage.setItem('authToken', token);

      alert('Login exitoso!');
      if (onLoginExitoso) onLoginExitoso(token);
    } catch (err) {
      console.error('Error en login:', err);
      setError(err?.response?.data || 'Usuario o contrasena incorrecta');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesion</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>Nombre de usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Tu usuario"
            />
          </div>

          <div className="form-group">
            <label>Contrasena</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Tu contrasena"
            />
          </div>

          {error && <p className="login-error">{String(error)}</p>}

          <button type="submit" className="btn-login">
            Acceder
          </button>

          <div className="login-options">
            <button type="button" className="btn-link">Crear cuenta</button>
            <button type="button" className="btn-link">Recuperar contrasena</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
