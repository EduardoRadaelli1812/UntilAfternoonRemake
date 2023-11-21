import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const Challenge6instruments = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/challenge6instruments');
    }, []);
  const [password1, setPassword1] = useState('');
  const [showText1, setShowText1] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword1 = () => {
    setShowText1(true);
  };

    const handlePasswordChange1 = (e) => {
        setPassword1(e.target.value);
    };
  return (
    <>
        <div className='c5'>
          <h1>CHALLENGE 6</h1>
          <p>
          <br></br>You need to know which instrument is used (or the main one) to play the music so you can check the class happening at the moment Trevor is in, to not let him escape. Type the name of the instruments in the blank field to find out if it's the instrument Trevor plays or not, and thus locate him. (Ex: battery)</p>
          <ul id="lista_challenge6instruments">
        <li>
        <a id="aa" href="https://www.youtube.com/watch?v=ekzHIouo8Q4" rel="noopener noreferrer" target="_blank">When I Was Your Man<br></br><br></br></a>
            <input type="text" placeholder="Digite:" value={password1} onChange={handlePasswordChange1}/>
            <button id='button_dica1' onClick={handleForgotPassword1}>Dica</button>
          {showText1 && <p id='p_dica1'>The instrument has buttons</p>}
          </li>
        </ul>
        <Link id='back_c5' to="/curriculum">BACK</Link>
        <button id='next_c5' onClick={() => { 
            if (
                password1 === 'piano'
            ) 
              {navigate('/c62');} 
            else 
              {alert('Preencha a lacuna corretamente! OBS: Escreva todo o conteúdo utilizando letras minúsculas');}
            }}
            >NEXT</button>
        </div>
    </>
  );
}

export default Challenge6instruments;