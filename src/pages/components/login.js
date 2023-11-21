import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics, logEvent } from "firebase/analytics";
import { app } from "../../firebase.js";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styles/styles.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const removeFirst9Chars = (str) => {
    return str.substring(9);
  };

  const handleLogin = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const analytics = getAnalytics(app);
        logEvent(analytics, 'login', {
          method: 'email',
        });
        console.log("Login bem-sucedido! UID: ", user.uid);

        const lastVisitedPage = localStorage.getItem('lastVisitedPage') || '/narrativa';

        window.location.href = lastVisitedPage;
      })
      .catch((error) => {
        const errorMessage = removeFirst9Chars(error.message);
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
        });
      });
  };

  useEffect(() => {
    if (!localStorage.getItem('lastVisitedPage')) {
      localStorage.setItem('lastVisitedPage', '/narrativa');
    }
  }, []);

  return (
    <div className="usuario">
      <p>Login</p>
      <ToastContainer />
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
      <button id="prox_login" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
