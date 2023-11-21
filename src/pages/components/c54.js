import i4 from "../../images/c5_i4.png";
import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const C54 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/c54');
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
          <ul id="lista_challenge5">
        
          <li>
            <p>Great! This is Louise, she has been working as a waitress for just four months now. She is also a student at UFSM, she studies Physiotherapy and is working part time to cover up her expenses. She complains to you she was also a victim to this mysterious hacker, so she wants to be of help. She whispers she has an inkling: on that day, three different girls have gossiped about something very suspicious when they were ordering their breakfast. “Those girls asked me to buy them a double macchiato with extra nutella, any toast that seems tasty and five cookies. I mean, they obviously have a sweet tooth and there’s nothing wrong with that, but that is so expensive for a breakfast! And they paid me by transferring their UR's…</p>
            <img src={i4} alt="i4" id='i4' />
            <input type="text" placeholder="Digite:" value={password4} onChange={handlePasswordChange4}/>
            <button id='button_dica1' onClick={handleForgotPassword4}>Dica</button>
          {showText4 && <p id='p_dica1'>Money used to pay for meals at UR.</p>}
          </li>
        </ul>
        <Link id='back_c5' to="/c53">BACK</Link>
        <button id='next_c5' onClick={() => { 
            if (
                password4 === 'credits'
            ) 
              {navigate('/c55');} 
            else 
              {alert('Preencha a lacuna corretamente! OBS: Escreva todo o conteúdo utilizando letras minúsculas');}
            }}
            >NEXT</button>
        </div>
    </>
  );
}

export default C54;