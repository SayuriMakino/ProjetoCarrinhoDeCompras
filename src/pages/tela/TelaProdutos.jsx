import React from "react";
import { FaTrash } from "react-icons/fa";  
import "./Tela.css";

export default function TelaProdutos({ produtos, adicionarAoCarrinho, redirecionarParaAtualizarProduto, redirecionarParaRemoverProduto }) {
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

          <button
            className="botao-atualizar"
            onClick={() => redirecionarParaAtualizarProduto(produto.id)}
          >
            Atualizar
          </button>

          <button
            className="botao-deletar"
            onClick={() => redirecionarParaRemoverProduto(produto.id)}
          >
            <FaTrash size={20} />
          </button>
        </div>
      ))}
    </div>
  );
}
