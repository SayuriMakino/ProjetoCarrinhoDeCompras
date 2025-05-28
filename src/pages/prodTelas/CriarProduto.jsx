import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StyleProd.css";

const CriarProduto = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/produtos");
  };

  return (
    <div className="product-container">
      <form className="product-form-box" onSubmit={handleSubmit}>
        <h1>Criar Produto</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="Nome do Produto"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="number"
            placeholder="Preço"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default CriarProduto;
