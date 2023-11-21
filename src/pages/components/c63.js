import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const C63 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/c63');
    }, []);
  const [password3, setPassword3] = useState('');
  const [showText3, setShowText3] = useState(false);

  const navigate = useNavigate();

  const handleForgotPassword3 = () => {
    setShowText3(true);
  };
    const handlePasswordChange3 = (e) => {
        setPassword3(e.target.value);
    };
  return (
    <>
        <div className='c5'>
          <ul id="lista_challenge6instruments">
          <li>
            <p id="titulo2">Music</p>
          <a id="aa" href="https://www.youtube.com/watch?v=axySrE0Kg6k" rel="noopener noreferrer" target="_blank">Beauty and the Beast<br></br><br></br></a>
            <input type="text" placeholder="Digite:" value={password3} onChange={handlePasswordChange3}/>
            <button id='button_dica1' onClick={handleForgotPassword3}>Dica</button>
          {showText3 && <p id='p_dica1'>Instrument that Giovanni Bononcini plays.</p>}
          </li>
        </ul>
        <Link id='back_c5' to="/c62">BACK</Link>
        <button id='next_c5' onClick={() => { 
            if (
                password3 === 'cello'
            ) 
              {navigate('/c64');} 
            else 
              {alert('Preencha a lacuna corretamente! OBS: Escreva todo o conteúdo utilizando letras minúsculas');}
            }}
            >NEXT</button>
        </div>
    </>
  );
}

export default C63;