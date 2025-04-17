import React from "react";
import "./tela.css";

export default function TelaProdutos({ produtos, adicionarAoCarrinho }) {
  return (
    <div className="grid-produtos">
      {produtos.map((produto, index) => (
        <div key={index} className="produto-card">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="produto-img"
          />
          <h3 className="produto-nome">{produto.nome}</h3>
          <p className="produto-preco">R$ {produto.valor.toFixed(2)}</p>
          <button
            className="botao-comprar"
            onClick={() => adicionarAoCarrinho(produto)}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      ))}
    </div>
  );
}
