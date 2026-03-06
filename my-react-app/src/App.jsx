import { useState } from "react";
import ContenedorTargetas from "./ContenedorTargetas";
import Encabezado from "./Encabezado";
import MonsterBanner from "./MonsterBanner";
import Footer from "./Footer";
import { AuthProvider } from "./AuthContext";

function App() {
  const [Vista, setVista] = useState("Inicio");
  return (
    <div>
      <AuthProvider>
        <Encabezado cambiarVista={setVista} />
        <ContenedorTargetas vista={Vista} />
      </AuthProvider>
      <MonsterBanner />
      <Footer />
    </div>
  );
}

export default App;
