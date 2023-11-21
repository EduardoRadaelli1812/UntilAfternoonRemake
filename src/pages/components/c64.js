import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const C64 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/c64');
    }, []);
  const [password4, setPassword4] = useState('');
  const [showText4, setShowText4] = useState(false);

  const navigate = useNavigate();
  const handleForgotPassword4 = () => {
    setShowText4(true);
  };
    const handlePasswordChange4 = (e) => {
        setPassword4(e.target.value);
    };
  return (
    <>
        <div className='c5'>
         <ul id="lista_challenge6instruments">
        
          <li>
          <a id="aa" href="https://www.youtube.com/watch?v=jGflUbPQfW8" rel="noopener noreferrer" target="_blank">Cheerleader<br></br><br></br></a>
            <input type="text" placeholder="Digite:" value={password4} onChange={handlePasswordChange4}/>
            <button id='button_dica1' onClick={handleForgotPassword4}>Dica</button>
          {showText4 && <p id='p_dica1'>An instrument traditionally played by soldiers.</p>}
          </li>
         
        </ul>
        <Link id='back_c5' to="/c63">BACK</Link>
        <button id='next_c5' onClick={() => { 
            if (
                password4 === 'trumpet'
            ) 
              {navigate('/c65');} 
            else 
              {alert('Preencha a lacuna corretamente! OBS: Escreva todo o conteúdo utilizando letras minúsculas');}
            }}
            >NEXT</button>
        </div>
    </>
  );
}

export default C64;