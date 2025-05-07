import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./StyleCriarLogin.css";

const CriarLogin = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    console.log({ nome, email, senha });
  };

  const navigate = useNavigate();

  const entrar = () => {
    navigate("/produtos");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="criar-container">
        <form onSubmit={handleSubmit}>
          <h1>Criar uma conta</h1>

          <div className="input-field">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Nome completo"
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="input-field">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-field">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <div className="input-field">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Confirmar senha"
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
          </div>

          <button type="submit" onClick={entrar}>
            Registrar
          </button>

          <div className="signup-link">
            <p>
              Já tem uma conta?
              <Link to="/"> Entrar</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CriarLogin;
