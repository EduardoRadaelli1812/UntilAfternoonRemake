import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics, logEvent } from "firebase/analytics";
import { app } from "../../firebase.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';

const removeFirst9Chars = (str) => {
  return str.substring(9);
};

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cadastroSucesso, setCadastroSucesso] = useState(false);

  const handleSignup = () => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const analytics = getAnalytics(app);
        logEvent(analytics, 'signup', {
          method: 'email',
        });

        // Marque o cadastro como bem-sucedido
        setCadastroSucesso(true);
        console.log("Cadastro realizado com sucesso! UID: ", user.uid);
        toast.success("Cadastro realizado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
        });

        // Após o cadastro bem-sucedido, redirecione o usuário
        window.location.href = '/login';
      })
      .catch((error) => {
        const errorMessage = removeFirst9Chars(error.message);
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
        });
      });
  };

  return (
    <div className="usuario">
      <p>Cadastro</p>
      <ToastContainer />
      <input
        type="text"
        placeholder="Nome Completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {cadastroSucesso ? (
        <Link to="/login">
          <button id="prox_cad">Cadastrar</button>
        </Link>
      ) : (
        <button id="prox_cad" onClick={handleSignup}>Cadastrar</button>
      )}
    </div>
  );
};

export default Cadastro;
