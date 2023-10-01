import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { useEffect, useState } from "react";
import Cabecalho from "./componentes/Cabecalho";
import FormProduto from "./componentes/FormProduto";
import ListaDeProdutos from "./componentes/ListaDeProdutos";
import DetalheProduto from "./componentes/DetalheProduto";
import PaginaNaoEncontrada from "./componentes/PaginaNaoEncontrada";
import axios from "axios";

const URL_BACK = 'http://localhost:5000/produtos';

function App() {
  const [produtos, setProdutos] = useState([]);

  // função chamada quando o componente for carregado
  useEffect(() => {
    axios.get(URL_BACK).then(res => {
      setProdutos(res.data);
    });
  }, []);

  return (
    <div className="container py-3">
    <Router>
      <Cabecalho/>
      <Routes>
        <Route path="/" exact={true} element={<ListaDeProdutos produtos={produtos}/>}/>
        <Route path="/novo" exact={true} element={<FormProduto/>}/>
        <Route path="/detalhe/:id" exact={true} element={<DetalheProduto/>}/>
        <Route path="*" element={<PaginaNaoEncontrada/>}/>
      </Routes>      
    </Router>
    </div>
  );
}

export default App;
