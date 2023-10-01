import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios";

const URL_BACK = 'http://localhost:5000/produtos';

export default function DetalheProduto() {
  let {id} = useParams();

  const [produto, setProduto] = useState({
    nome: '',
    valor: '',
    foto: ''
  });

  useEffect(() => {
    axios.get(URL_BACK + '/' + id).then(res => {
      setProduto(res.data);
    });
  }, []);

  return (
    <div>
      <img src={produto.foto}/>
      <h1>{produto.nome}</h1>
      <h3>R$ {produto.valor}</h3>
      <Link to="/">Voltar</Link>
    </div>
  )
}
