import React from "react";
import "./style.css";

export default function Carrinho({ fechar, produtosCarrinho, removerProduto }) {
  const total = produtosCarrinho.reduce((sum, p) => sum + p.preco, 0);

  return (
    <div className="container-carrinho">
      <div className="header-carrinho">
        <p>
          Seu carrinho tem <strong>{produtosCarrinho.length} itens</strong>
        </p>
        <button className="fechar-carrinho" onClick={fechar}>✕</button>
      </div>

      <div className="todosProd">
        {produtosCarrinho.map((p, i) => (
          <div key={i} className="produto">
            <div className="img">
              <img src={p.imagem} alt={p.nome} />
            </div>
            <div className="text">
              <p className="legenda-Produto">{p.nome}</p>
              <div className="quantidade-preco">
                <p className="preco">R$ {p.preco.toFixed(2)}</p>
                <button
                  className="botao-remover"
                  onClick={() => removerProduto(i)}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container2">
        <div className="total-container">
          <p className="esquerdaC2">Total:</p>
          <p className="total">R$ {total.toFixed(2)}</p>
        </div>
        <button className="cupom">Adicionar cupom</button>
        <button className="finalizarCompra">Finalizar compra</button>
      </div>
    </div>
  );
}
