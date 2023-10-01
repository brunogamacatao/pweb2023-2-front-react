import React from 'react'
import { Link } from 'react-router-dom';

export default function ListaDeProdutos({produtos}) {
  const renderProduto = (produto) => {
    return (
      <div className='produto'>
        <Link to={'/detalhe/' + produto._id}>
          <img src={produto.foto}/>
        </Link>
        <p className='nome'>{produto.nome}</p>
        <p className='valor'>R$ {produto.valor}</p>
        <button className='btn btn-primary'>Comprar</button>
      </div>
    );
  };

  return (
    <div className='listaDeProdutos'>
      { produtos.map(renderProduto) }
    </div>
  )
}
