import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CriarProduto({ adicionarProduto }) {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [imagem, setImagem] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/produtos/criar", {
        nome,
        valor: parseFloat(valor),
        imagem,
      });

      if (adicionarProduto) {
        adicionarProduto(response.data);  
      }

      setNome("");
      setValor("");
      setImagem("");

      navigate("/produtos"); 
    } catch (error) {
      console.error("Erro ao criar produto:", error);
    }
  };

  return (
    <div className="product-container">
      <div className="product-form-box">
        <h1>Criar Produto</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label>Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="input-field">
            <label>Valor (R$):</label>
            <input
              type="number"
              step="0.01"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              required
            />
          </div>

          <div className="input-field">
            <label>Imagem (URL):</label>
            <input
              type="text"
              value={imagem}
              onChange={(e) => setImagem(e.target.value)}
            />
          </div>

          {imagem && (
            <div style={{ marginTop: "10px" }}>
              <h4>Prévia da Imagem:</h4>
              <img
                src={imagem}
                alt="Prévia"
                style={{ maxWidth: "300px", maxHeight: "200px", objectFit: "contain" }}
              />
            </div>
          )}

          <button className="botoes-pgProd" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
