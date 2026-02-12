import "./Atletas.css";

function Atletas() {
  return (
    <div className="atletas-container">
      <h2 className="atletas-titulo">Atletas de Monster Energy</h2>
      <p className="atletas-subtitulo">
        Imágenes y momentos épicos con Monster Energy.
      </p>

      <div className="atletas-grid">

        {/* ATLETA 1 */}
        <div className="atleta-card">
          <img
            src="https://web-assests.monsterenergy.com/mnst/0e5f38c0-d7f6-4982-a843-d16721fdf5c3.png"
            alt="Adam Kun"
            className="atleta-img"
          />
          <h3>Adam Kun</h3>
          <p>Disciplina: Bici</p>
        </div>

        {/* ATLETA 2 */}
        <div className="atleta-card">
          <img
            src="https://web-assests.monsterenergy.com/mnst/a271b8cc-2b7c-421f-bd13-4798eea53213.webp"
            alt="Team Liquid"
            className="atleta-img"
          />
          <h3>Team Liquid</h3>
          <p>Disciplina: Videojuegos</p>
        </div>

        {/* ATLETA 3 */}
        <div className="atleta-card">
          <img
            src="https://web-assests.monsterenergy.com/mnst/55ddd70f-14c6-4155-aaf3-ec62c0a0df2c.webp"
            alt="Troy Brosnan"
            className="atleta-img"
          />
          <h3>Troy Brosnan</h3>
          <p>Disciplina: Bici</p>
        </div>

        {/* ATLETA 4 */}
        <div className="atleta-card">
          <img
            src="https://web-assests.monsterenergy.com/mnst/691263b2-f8c6-4eb3-acbb-09a69343a8e0.webp"
            alt="Adolf Silva"
            className="atleta-img"
          />
          <h3>Adolf Silva</h3>
          <p>Disciplina: Bici</p>
        </div>

        {/* ATLETA 5 */}
        <div className="atleta-card">
          <img src="https://web-assests.monsterenergy.com/mnst/a476b0e0-578d-4a46-9b4e-a49a9a626dd5.webp" alt="Alex Rins" className="atleta-img" />
          <h3>Alex Rins</h3>
          <p>Disciplina: MotoGP</p>
        </div>

        {/* ATLETA 6 */}
        <div className="atleta-card">
          <img src="https://web-assests.monsterenergy.com/mnst/0f7e446e-8f8e-44b8-b97c-e58d2e786c41.webp" alt="Oscar Piastri" className="atleta-img" />
          <h3>Oscar Piastri</h3>
          <p>Disciplina: Fórmula 1</p>
        </div>

        {/* ATLETA 7 */}
        <div className="atleta-card">
          <img src="https://web-assests.monsterenergy.com/mnst/f5087382-0997-4e44-a2d1-4006983e28cf.webp" alt="Eli Tomac" className="atleta-img" />
          <h3>Eli Tomac</h3>
          <p>Disciplina: Supercross</p>
        </div>

        {/* ATLETA 8 */}
        <div className="atleta-card">
          <img src="https://web-assests.monsterenergy.com/mnst/a193454d-83d8-4d18-952f-e9740e21b33c.webp" alt="Enea Bastianini" className="atleta-img" />
          <h3>Enea Bastianini</h3>
          <p>Disciplina: MotoGP</p>
        </div>

        {/* ATLETA 9 */}
        <div className="atleta-card">
          <img src="https://web-assests.monsterenergy.com/mnst/85045951-0268-4cca-856a-589fe4b6411a.webp" alt="Hailie Deegan" className="atleta-img" />
          <h3>Hailie Deegan</h3>
          <p>Disciplina: Wheel</p>
        </div>


      </div>
    </div>
  );
}

export default Atletas;
