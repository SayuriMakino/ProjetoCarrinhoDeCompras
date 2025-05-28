import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../pages/login/Login";
import CriarLogin from "../../pages/criarLogin/CriarLogin";
import Loja from "../../pages/tela/Loja";  
import PrivateRoute from "../PrivateRoute";
import CriarProduto from "../../pages/prodTelas/CriarProduto";  
import AtualizarProduto from "../../pages/prodTelas/AtualizarProduto";  
import VisualizarProduto from "../../pages/prodTelas/VisualizarProduto";  
import RemoverProduto from "../../pages/prodTelas/RemoverProduto"; 

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/criar-login" element={<CriarLogin />} />
      
      <Route 
        path="/produtos" 
        element={
          <PrivateRoute>
            <Loja />  
          </PrivateRoute>
        } 
      />

      <Route 
        path="/produtos/visualizar" 
        element={
          <PrivateRoute>
            <VisualizarProduto />  
          </PrivateRoute>
        } 
      />
      
      <Route 
        path="/produtos/criar" 
        element={
          <PrivateRoute>
            <CriarProduto />  
          </PrivateRoute>
        } 
      />
      
      <Route 
        path="/produtos/atualizar/:id" 
        element={
          <PrivateRoute>
            <AtualizarProduto />  
          </PrivateRoute>
        } 
      />
      
      <Route 
        path="/produtos/remover/:id" 
        element={
          <PrivateRoute>
            <RemoverProduto />  
          </PrivateRoute>
        } 
      />
    </Routes>
  );
}
