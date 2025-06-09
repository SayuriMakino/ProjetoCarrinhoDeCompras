import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./StyleProd.css";

export default function AtualizarProduto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [imagem, setImagem] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    const buscarProduto = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/produtos/${id}`);
        const produto = response.data;
        setNome(produto.nome || "");
        setValor(produto.valor?.toString() || "");
        setImagem(produto.imagem || "");
      } catch (error) {
        console.error("Erro ao carregar dados do produto:", error);
        setErro("Erro ao carregar os dados do produto. Tente novamente.");
      }
    };

    buscarProduto();
  }, [id]);

  const handleAtualizar = async (e) => {
    e.preventDefault();

    const produtoAtualizado = {
      nome,
      valor: parseFloat(valor),
      imagem
    };

    try {
      const resposta = await fetch(`http://localhost:3000/produtos/atualizar/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(produtoAtualizado)
      });

      if (resposta.ok) {
        console.log("Produto atualizado com sucesso!");
        navigate("/produtos");
      } else {
        console.error("Erro ao atualizar produto");
        setErro("Erro ao atualizar o produto. Tente novamente.");
      }
    } catch (erro) {
      console.error("Erro na requisição:", erro);
      setErro("Erro na requisição. Tente novamente.");
    }
  };

  return (
    <div className="product-container">
      <form className="product-form-box" onSubmit={handleAtualizar}>
        <h1>Atualizar Produto</h1>
        {erro && <div className="error-message">{erro}</div>}

        <div className="input-field">
          <input
            type="text"
            placeholder="Nome do Produto"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="number"
            placeholder="Preço"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="url"
            placeholder="Link da Imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
        </div>

        {imagem && (
          <div className="image-preview">
            <h4>Prévia da Imagem:</h4>
            <img
              src={imagem}
              alt="Preview"
              style={{ maxWidth: "200px", maxHeight: "200px", marginTop: "10px" }}
            />
          </div>
        )}

        <button className="botoes-pgProd" type="submit">Atualizar</button>
      </form>
    </div>
  );
}
