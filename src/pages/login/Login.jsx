import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./StyleLogin.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <div className="login-container">
        <form className="login-form-box" onSubmit={handleSubmit}>
          <h1 className="login">Login</h1>
          <div className="login-input-field">
            <input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="login-icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <div className="login-recall-forget">
            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>
            <a href="#" className="esqueciSenha">Esqueci a senha</a>
          </div>
          <button type="submit">Entrar</button>
          <div className="login-signup-link">
            <p>
              Não tem uma conta? <Link to="/criar-login">Registrar</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
