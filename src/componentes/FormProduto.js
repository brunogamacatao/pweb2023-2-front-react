import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const URL_BACK = 'http://localhost:5000/produtos';

export default function FormProduto() {
  const formVazio = () => {
    return {
      nome: '',
      valor: 0.0,
      foto: ''
    };
  };

  const navigate = useNavigate();
  const [form, setForm] = useState(formVazio());

  const setValor = (evento) => {
    setForm({...form, [evento.target.name]: evento.target.value});
  };

  const cadastrarProduto = (e) => {
    e.preventDefault();
    axios.post(URL_BACK, form).then(res => {
      navigate('/');
    });
  };

  return (
    <form onSubmit={cadastrarProduto}>
      <p>
        <label>Nome:</label>
        <input name="nome" type="text" value={form.nome} onChange={setValor}/>
      </p>
      <p>
        <label>Valor:</label>
        <input name="valor" type="number" value={form.valor} onChange={setValor}/>
      </p>
      <p>
        <label>Foto:</label>
        <input name="foto" type="text" value={form.foto} onChange={setValor}/>
      </p>
      <p>
        <button>Cadastrar</button>
      </p>
    </form>
  )
}
