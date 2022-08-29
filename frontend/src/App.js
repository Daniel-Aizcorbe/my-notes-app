import './App.css';

import Header from "./components/home/header/Header";
import BarraLateral from "./components/home/barra-lateral/BarraLateral";
import ListadoNotas from "./components/home/listado-notas/ListadoNotas";

import {Provider} from "react-redux";

import store from "./redux/store";

function App() {

  return (
    <Provider store={store}>

        <Header />
        <div className="contenedor-cuerpo">
          <BarraLateral />
          <ListadoNotas />
        </div>
    </Provider>
  );
}

export default App;
