import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const C62 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/c62');
    }, []);
  const [password2, setPassword2] = useState('');
  const [showText2, setShowText2] = useState(false);

  const navigate = useNavigate();

  const handleForgotPassword2 = () => {
    setShowText2(true);
  };
    const handlePasswordChange2 = (e) => {
    setPassword2(e.target.value);
    };
  return (
    <>
        <div className='c5'>
          <ul id="lista_challenge6instruments">
          <li>
          <a id="aa" href="https://www.youtube.com/watch?v=w1oM3kQpXRo" rel="noopener noreferrer" target="_blank">Everything Has Changed<br></br><br></br></a>
            <input type="text" placeholder="Digite:" value={password2} onChange={handlePasswordChange2}/>
            <button id='button_dica1' onClick={handleForgotPassword2}>Dica</button>
          {showText2 && <p id='p_dica1'>An instrument widely used in Brazilian country music..</p>}
          </li>
        </ul>
        <Link id='back_c5' to="/challenge6instruments">BACK</Link>
        <button id='next_c5' onClick={() => { 
            if (
                password2 === 'guitar'
            ) 
              {navigate('/c63');} 
            else 
              {alert('Preencha a lacuna corretamente! OBS: Escreva todo o conteúdo utilizando letras minúsculas');}
            }}
            >NEXT</button>
        </div>
    </>
  );
}

export default C62;