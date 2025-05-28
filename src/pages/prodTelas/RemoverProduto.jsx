import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./StyleProd.css";

const RemoverProduto = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
  };

  return (
    <div className="product-container">
      <div className="product-form-box">
        <h1>Tem certeza que deseja remover o produto?</h1>
        <button onClick={handleDelete}>Sim, Remover</button>
        <button onClick={() => navigate("/produtos")}>Cancelar</button>
      </div>
    </div>
  );
};

export default RemoverProduto;
