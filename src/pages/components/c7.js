import React, { useState, useEffect } from 'react';
import c7 from "../../images/c7.png";
import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';

const C7 = () => {
  useEffect(() => {
    localStorage.setItem('lastVisitedPage', '/c7');
  }, []);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  return (
    <div className='ch_img'>
        <p>Who is the hacker? If you haven't discovered it yet, you will find the name on the word search box.</p>
        <img src={c7} alt="c7" />
        <input
        id="input_hacker"
            type='text'
            placeholder='***i**a'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        <Link id='back_ch_img' to="/followed">BACK</Link>
          <button
            id='next_ch_img'
            onClick={() => {
              if (
                password === 'poliana' 
              ) {
                navigate('/polianahacker');
              } else {
                alert('Preencha a lacuna com a senha correta! OBS: Escreva todo o conteúdo utilizando letras minúsculas');
              }
            }}
          >
            NEXT
          </button>
    </div>
  );
}

export default C7;