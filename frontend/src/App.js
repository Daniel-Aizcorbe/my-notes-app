import './App.css';
import Header from "./components/home/header/Header";
import BarraLateral from "./components/home/barra-lateral/BarraLateral";
import ListadoNotas from "./components/home/listado-notas/ListadoNotas";

function App() {

  return (
    <div className="App">
      <Header />
      <div className="contenedor-cuerpo">
        <BarraLateral />
        <ListadoNotas />
      </div>
    </div>
  );
}

export default App;
