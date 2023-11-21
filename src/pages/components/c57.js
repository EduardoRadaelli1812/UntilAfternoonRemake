import i7 from "../../images/c5_i7.png";
import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const C57 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/c57');
    }, []);
  const [password7, setPassword7] = useState('');
  const [showText7, setShowText7] = useState(false);


  const navigate = useNavigate();

  const handleForgotPassword7 = () => {
    setShowText7(true);
  };

    const handlePasswordChange7 = (e) => {
        setPassword7(e.target.value);
    };

  return (
    <>
        <div className='c5'>
          <ul id="lista_challenge5">
          <li>
            <p>You promised to keep Poliana's secret. Then Poliana said goodbye and almost rushed out. She looked a little upset, probably because she felt bad for having accepted that sort of agreement. You left the coffee house feeling bad. That boy had lied to your face and you had still helped him. Then you decide to go to the Music building, but you don't know where it is, so you check the campus map. What is the number for the music center?</p>
            <img src={i7} alt="i7" id='i7' />
            <input type="text" placeholder="Digite:" value={password7} onChange={handlePasswordChange7}/>
            <button id='button_dica1' onClick={handleForgotPassword7}>Dica</button>
          {showText7 && <p id='p_dica1'>The number is the one for the Arts and Letters Center and the letter is for the Music building. </p>}
          </li>
        </ul>
        <Link id='back_c5' to="/c56">BACK</Link>
        <button id='next_c5' onClick={() => { 
            if (
                password7 === '40b'
            ) 
              {navigate('/musicbuilding');} 
            else 
              {alert('Preencha a lacuna corretamente! OBS: Escreva todo o conteúdo utilizando letras minúsculas');}
            }}
            >NEXT</button>
        </div>
    </>
  );
}

export default C57;