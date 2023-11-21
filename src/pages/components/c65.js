import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const C65 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/c65');
    }, []);
  const [password8, setPassword8] = useState('');
  const [showText8, setShowText8] = useState(false);

  const navigate = useNavigate();

  const handleForgotPassword8 = () => {
    setShowText8(true);
  };
    const handlePasswordChange8 = (e) => {
        setPassword8(e.target.value);
    };
  return (
    <>
        <div className='c5'>
          <ul id="lista_challenge6instruments">
          <li>
          
          <a id="aa" href="https://www.youtube.com/watch?v=F2RnxZnubCM" rel="noopener noreferrer" target="_blank">My Heart Will Go On<br></br><br></br></a>
            <input type="text" placeholder="Digite:" value={password8} onChange={handlePasswordChange8}/>
            <button id='button_dica1' onClick={handleForgotPassword8}>Dica</button>
          {showText8 && <p id='p_dica1'>Instrument appears in a very famous fable involving mice.</p>}
          </li>
        </ul>
        <Link id='back_c5' to="/c64">BACK</Link>
        <button id='next_c5' onClick={() => { 
            if (
                password8 === 'flute'
            ) 
              {navigate('/c66');} 
            else 
              {alert('Preencha a lacuna corretamente! OBS: Escreva todo o conteúdo utilizando letras minúsculas');}
            }}
            >NEXT</button>
        </div>
    </>
  );
}

export default C65;