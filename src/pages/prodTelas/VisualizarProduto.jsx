
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./StyleProd.css";

const VisualizarProdutos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  }, []);

  const handleDelete = (id) => {
  };

  return (
    <div className="product-container">
      <h1>Produtos</h1>
      <Link to="/produtos/criar" className="create-link">
        Criar Novo Produto
      </Link>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>Preço: R${product.price}</p>
            </div>
            <div className="product-actions">
              <Link to={`/produtos/atualizar/${product.id}`} className="action-link">
                Atualizar
              </Link>
              <button
                className="action-link"
                onClick={() => handleDelete(product.id)}
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisualizarProdutos;
