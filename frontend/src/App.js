import './App.css';
import Header from "./components/views/home/header/Header";
import BarraLateral from "./components/views/home/barra-lateral/BarraLateral";
import ListadoNotas from "./components/views/home/listado-notas/ListadoNotas";

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
