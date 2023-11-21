import i3 from "../../images/c5_i3.png";
import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const C53 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/c53');
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
          <ul id="lista_challenge5">
          <li>
            <p>Brad has been working at Cosmopolita as a substitute for that day. He actually works at the Cosmopolita downtown. You asked Brad about the credits, but he has no idea what you are talking about. He says his colleague may have the information you need, since she has been working in the same position as him for a while. BTW, how do you say her job/occupation in English?</p>
            <img src={i3} alt="i3" id='i3' />
            <input type="text" placeholder="Digite:" value={password3} onChange={handlePasswordChange3}/>
            <button id='button_dica1' onClick={handleForgotPassword3}>Dica</button>
          {showText3 && <p id='p_dica1'>Female waiter.</p>}
          </li>
        </ul>
        <Link id='back_c5' to="/c52">BACK</Link>
        <button id='next_c5' onClick={() => { 
            if (
                password3 === 'waitress'
            ) 
              {navigate('/c54');} 
            else 
              {alert('Preencha a lacuna corretamente! OBS: Escreva todo o conteúdo utilizando letras minúsculas');}
            }}
            >NEXT</button>
        </div>
    </>
  );
}

export default C53;