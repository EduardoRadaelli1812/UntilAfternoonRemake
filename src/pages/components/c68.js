import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const C68 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/c68');
    }, []);
  const [password5, setPassword5] = useState('');
  const [showText5, setShowText5] = useState(false);

  const navigate = useNavigate();

  const handleForgotPassword5 = () => {
    setShowText5(true);
  };

    const handlePasswordChange5 = (e) => {
        setPassword5(e.target.value);
    };
  return (
    <>
        <div className='c5'>
         <ul id="lista_challenge6instruments">
          <li>
          <a id="aa" href="https://www.youtube.com/watch?v=m-M1AtrxztU" rel="noopener noreferrer" target="_blank">Rather be (Trevor's)<br></br><br></br></a>
            <input type="text" placeholder="Digite:" value={password5} onChange={handlePasswordChange5}/>
            <button id='button_dica1' onClick={handleForgotPassword5}>Dica</button>
          {showText5 && <p id='p_dica1'>Instrument played over the shoulders.</p>}

          </li>
        </ul>
        <Link id='back_c5' to="/c66">BACK</Link>
        <button id='next_c5' onClick={() => { 
            if (
              password5 === 'violin'
            ) 
              {navigate('/accuse');} 
            else 
              {alert('Preencha a lacuna corretamente! OBS: Escreva todo o conteúdo utilizando letras minúsculas');}
            }}
            >NEXT</button>
        </div>
    </>
  );
}

export default C68;