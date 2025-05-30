import React, { useState, useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"; 
import TelaProdutos from "./TelaProdutos";
import Carrinho from "../../componentes/carrinho";
import axios from "axios";  
import './StyleLoja.css';

export default function Loja() {
  const [produtosCarrinho, setProdutosCarrinho] = useState([]);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
  const [produtos, setProdutos] = useState([]); 

  const navigate = useNavigate();

  const adicionarProduto = (produto) => {
    const produtoExistente = produtos.find(p => p.id === produto.id);
    if (!produtoExistente) {
      setProdutos((prevProdutos) => [...prevProdutos, produto]);
    }
  };

  const buscarProdutos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/produtos/ler");
      setProdutos(response.data); 
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const adicionarAoCarrinho = (produto) => {
    setProdutosCarrinho((prev) => [...prev, { ...produto, preco: produto.valor }]);
    setMostrarCarrinho(true);
  };

  const removerProduto = (index) => {
    setProdutosCarrinho((prev) => {
      const copia = [...prev];
      copia.splice(index, 1);
      return copia;
    });
  };

  useEffect(() => {
    buscarProdutos(); 
  }, []); 

  const redirecionarParaCriarProduto = () => {
    navigate("/produtos/criar");
  };

  const redirecionarParaAtualizarProduto = (id) => {
    navigate(`/produtos/atualizar/${id}`);
  };

  const redirecionarParaRemoverProduto = (id) => {
    navigate(`/produtos/remover/${id}`);
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

      <button className="botao-criar" onClick={redirecionarParaCriarProduto}>
        Criar Novo Produto
      </button>

      <TelaProdutos
        produtos={produtos}  
        adicionarAoCarrinho={adicionarAoCarrinho}
        redirecionarParaAtualizarProduto={redirecionarParaAtualizarProduto}
        redirecionarParaRemoverProduto={redirecionarParaRemoverProduto}
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
