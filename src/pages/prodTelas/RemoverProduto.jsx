import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DeletarProduto } from "../../componentes/data/fetchProdutos"; 

const RemoverProduto = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  const handleDelete = async () => {
    try {
      await DeletarProduto(id); 
      
      navigate("/produtos");
    } catch (error) {
      console.error("Erro ao remover produto:", error);
      alert("Erro ao remover o produto");
    }
  };

  return (
    <div className="product-container">
      <div className="product-form-box">
        <h1>Tem certeza que deseja remover o produto?</h1>
        <button className="botoes-pgProd" onClick={handleDelete}>Sim, Remover</button>
        <button className="botoes-pgProd" onClick={() => navigate("/produtos")}>Cancelar</button>
      </div>
    </div>
  );
};

export default RemoverProduto;
