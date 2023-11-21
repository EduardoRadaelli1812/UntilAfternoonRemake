import bilhetemao from "../../images/bilhete_mao.png";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const Challenge2 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/challenge2');
    }, []);  
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
};
  return (
    <>
    <div className='ch_img'>
    <p id="titulo">Challenge 2</p>
        <img src={bilhetemao} alt="bilhetemao" />
        <p>Go to the challenge 2 (Little Red's Instagram) and back here to answer in where she works.
        <br></br><br></br>Write bellow the password:</p>
        <input type="text" placeholder="t** r***o*y" value={password} onChange={handlePasswordChange}/>
        <Link id='back_ch_img' to="/cutscene4">BACK</Link>
        <button id='next_ch_img' onClick={() => { 
          if (password === 'the rectory'  || password === 'rectory')
           {navigate('/challenge2rectory');} 
          else 
            {alert('Preencha a lacuna corretamente! OBS: Escreva todo o conteúdo utilizando letras minúsculas');}
          }}
          >NEXT</button>
    </div>
    </>
  );
}

export default Challenge2;