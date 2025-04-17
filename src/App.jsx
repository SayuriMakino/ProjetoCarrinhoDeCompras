import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import TelaProdutos from "./componentes/tela/telaProdutos.jsx";
import Carrinho from "./componentes/carrinho/index.jsx";

import { produtos } from "./componentes/produtos/produtos.js";

import "./App.css";

export default function App() {
  const [produtosCarrinho, setProdutosCarrinho] = useState([]);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  const adicionarAoCarrinho = (produto) => {
    setProdutosCarrinho(prev => [...prev, { ...produto, preco: produto.valor }]);
    setMostrarCarrinho(true);
  };

  const removerProduto = (index) => {
    setProdutosCarrinho(prev => {
      const copia = [...prev];
      copia.splice(index, 1);
      return copia;
    });
  };

  return (
    <div>
      <header className="topo">
        <h1>Loja</h1>
        <button
          className="botao-carrinho"
          onClick={() => setMostrarCarrinho(true)}
        >
          <FaCartShopping size={20} /> Carrinho ({produtosCarrinho.length})
        </button>
      </header>

      <TelaProdutos
        produtos={produtos}
        adicionarAoCarrinho={adicionarAoCarrinho}
      />

      {mostrarCarrinho && (
        <Carrinho
          fechar={() => setMostrarCarrinho(false)}
          produtosCarrinho={produtosCarrinho}
          removerProduto={removerProduto}
        />
      )}
    </div>
  );
}
