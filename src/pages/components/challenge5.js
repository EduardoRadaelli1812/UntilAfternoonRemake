import i1 from "../../images/c5_i1.png";
import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const Challenge5 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/challenge5');
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
          <h1>CHALLENGE 5</h1>
          <ul id="lista_challenge5">
        <li>
          <p>Cosmopolita Coffeehouse, an annex of the Technology Center inside the campus, is one of the most visited places by students. Every day, hundreds of people order their morning coffee and brunches there. With all this fuss, how are we going to find something out? You could ask someone that wirks there! But who? By the way, I would ask the barista. Well... How do I say "barista" in English?</p>
            <img src={i1} alt="i1" id='i1' />
            <input type="text" placeholder="Digite:" value={password1} onChange={handlePasswordChange1}/>
            <button id='button_dica1' onClick={handleForgotPassword1}>Dica</button>
          {showText1 && <p id='p_dica1'>How about someone who makes the coffees? How are they called?</p>}
          </li>
        </ul>
        <Link id='back_c5' to="/cutscene7">BACK</Link>
        <button id='next_c5' onClick={() => { 
            if (
                password1 === 'bartender'
            ) 
              {navigate('/c52');} 
            else 
              {alert('Preencha a lacuna corretamente! OBS: Escreva todo o conteúdo utilizando letras minúsculas');}
            }}
            >NEXT</button>
        </div>
    </>
  );
}

export default Challenge5;