import { useState } from "react";
import ContenedorTargetas from "./ContenedorTargetas";
import Encabezado from "./Encabezado";
import MonsterBanner from "./MonsterBanner";
import Footer from "./Footer";

function App() {
  const[Vista, setVista] = useState("Inicio");
  return (
    <div>
      <Encabezado cambiarVista={setVista} />
      <ContenedorTargetas vista={Vista} />
      <MonsterBanner/>
      <Footer/>
    </div>
  );
}

export default App;
