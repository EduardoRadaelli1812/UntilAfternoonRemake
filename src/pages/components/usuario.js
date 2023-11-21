import React from "react";
import { Link } from "react-router-dom";
import '../styles/styles.css';

const Usuario = () => {
  return (
    <div className="usuario">
        <p>Página do Usuário</p>
        <Link to="/cadastro" id="botao_c">Cadastro</Link>
        <Link to="/login" id="botao_l">Login</Link>
        <Link id='back_usuario' to="/">BACK</Link>
    </div>
  );
};

export default Usuario;
