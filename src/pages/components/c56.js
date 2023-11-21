import i6 from "../../images/c5_i6.png";
import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const C56 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/c56');
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
          <ul id="lista_challenge5">
          <li>
            <p>She says the hacker is Trevor. She remembers his building is very far and mentioned he was carrying an instrument case. So you get to the conclusion he is probably a …</p>
            <img src={i6} alt="i6" id='i6' />
            <input type="text" placeholder="Digite:" value={password6} onChange={handlePasswordChange6}/>
            <button id='button_dica1' onClick={handleForgotPassword6}>Dica</button>
          {showText6 && <p id='p_dica1'>If he has an instrument case, what is he?</p>}
          </li>
        </ul>
        <Link id='back_c5' to="/c55">BACK</Link>
        <button id='next_c5' onClick={() => { 
            if (
                password6 === 'musician'
            ) 
              {navigate('/c57');} 
            else 
              {alert('Preencha a lacuna corretamente! OBS: Escreva todo o conteúdo utilizando letras minúsculas');}
            }}
            >NEXT</button>
        </div>
    </>
  );
}

export default C56;