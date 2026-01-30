import ContenedorTargetas from "./ContenedorTargetas";
import Encabezado from "./Encabezado";

function App() {
  return (
    <div>
      <Encabezado/>
      <ContenedorTargetas/>
      <h1>5A EVND</h1>
      <h2>Profesor</h2>
      <h3>M.T.I Ricardo Luna Santos</h3>
      <h4>Alumnos</h4>
      <h4>Cristian</h4>
      <h4>Salas</h4>

      <UserComponent/>
      <ProfileComponent/>
      <FeedComponent/>
    </div>
  );
}

function UserComponent(){
  const nombre = 'Cxxs';
  const apellidos = 'Sxlxs Vxntxrx'
  const nombrecompleto = <h3>El nombre es {nombre} y sus apellidos son {apellidos}</h3>
  return <h3>User Component {nombrecompleto}</h3>
}

function ProfileComponent(){
   const users = [
    { id: 1, name:'Cristian', role: 'Web Developer'},
    { id: 2, name:'Diana', role: 'Web Designer'},
    { id: 1, name:'Emanuel', role: 'Team Leader'},
  ]
  return (
  <>
    <p>Lista de usuarios del sistema</p>
    <ul>
      {
      users.map(function(user,index){
        return(
          <li key={index}>{user.name} es un {user.role}</li>
        )
      })
    }
    </ul>
  </>
  );
}

function FeedComponent(){
  const users = [
    { id: 1, material:'cemento', role: 'paredes'},
    { id: 2, material:'barilla', role: 'la loza'},
    { id: 1, material:'clavos', role: 'simbra'},
    { id: 1, material:'martillo', role: 'clavos'},
    { id: 1, material:'arena', role: 'mezcla'},
  ]
  
  return (
    <>
    <p>Lista de usuarios del sistema</p>
    <ul>
      {
      users.map(function(user,index){
        return(
          <li key={index}>{user.material} ese usa en {user.role}</li>
        )
      })
    }
    </ul>
  </>
  );

}

export default App;
