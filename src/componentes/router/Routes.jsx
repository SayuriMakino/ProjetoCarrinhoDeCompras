import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../pages/login/Login";
import CriarLogin from "../../pages/criarLogin/CriarLogin";
import Loja from "../../pages/tela/Loja";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/criar-login" element={<CriarLogin />} />
      <Route path="/produtos" element={<Loja />} />
    </Routes>
  );
}
