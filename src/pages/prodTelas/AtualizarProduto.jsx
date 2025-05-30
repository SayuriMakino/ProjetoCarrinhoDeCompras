import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./StyleProd.css";

const AtualizarProduto = () => {
  const { id } = useParams();
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
        <h1>Atualizar Produto</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="Nome do Produto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="number"
            placeholder="Preço"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button className="botoes-pgProd" type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default AtualizarProduto;
