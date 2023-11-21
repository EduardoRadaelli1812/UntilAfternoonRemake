import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const C66 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/c66');
    }, []);
  const [password6, setPassword6] = useState('');
  const [showText6, setShowText6] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword6 = () => {
    setShowText6(true);
  };
    const handlePasswordChange6 = (e) => {
        setPassword6(e.target.value);
    };
  return (
    <>
        <div className='c5'>
          <ul id="lista_challenge6instruments">
          <li>
          <a id="aa" href="https://www.youtube.com/watch?v=dtnNO5_Ao6U" rel="noopener noreferrer" target="_blank">The Pink Panther<br></br><br></br></a>
            <input type="text" placeholder="Digite:" value={password6} onChange={handlePasswordChange6}/>
            <button id='button_dica1' onClick={handleForgotPassword6}>Dica</button>
          {showText6 && <p id='p_dica1'>An instrument that needs to be placed on the floor and held by the musician because of its large size.</p>}
          </li>
        </ul>
        <Link id='back_c5' to="/c65">BACK</Link>
        <button id='next_c5' onClick={() => { 
            if (
                password6 === 'contrabass'
            ) 
              {navigate('/c68');} 
            else 
              {alert('Preencha a lacuna corretamente! OBS: Escreva todo o conteúdo utilizando letras minúsculas');}
            }}
            >NEXT</button>
        </div>
    </>
  );
}

export default C66;