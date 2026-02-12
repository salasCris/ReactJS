import { useState } from "react";
import "./Contactos.css";
function Contactos() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);

    setMensajeEnviado(true);

    setFormData({
      nombre: "",
      email: "",
      mensaje: ""
    });
  };

  return (
    <div className="contactos-container">
      <h2 className="titulo">Contactos</h2>

      <p className="info-texto">
        Contáctanos por correo: contacto@monster.example o por teléfono: +34
        600 000 000.
      </p>

      <h3 className="subtitulo">Envíanos un mensaje</h3>

      {mensajeEnviado && (
        <p className="success-message">
          Mensaje enviado correctamente ⚡
        </p>
      )}

      <form className="formulario" onSubmit={handleSubmit}>
        <div className="campo">
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo">
          <label>Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            pattern="[0-9+ ]{9,15}"
           
          />
        </div>

        <div className="campo">
          <label>Mensaje:</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </div>

        <button className="boton-enviar" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contactos;
