import { useNavigate, Link } from 'react-router-dom';
import Note from "../../images/note.png";
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const Challenge1note = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/challenge1note');
    }, []);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  return (
    <div className='ch_img'>
          <p id="titulo">Challenge 1</p>
        <img src={Note} alt="note" id='note' />
        <p>Write below the environmental preservation area located on the UFSM campus, a green space of great importance to the academic community and the city of Santa Maria.</p>
        <input
            id='note_password'
            type='text'
            placeholder='t*e *oo**'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        <Link id='back_ch_img' to="/challenge1puzzle">BACK</Link>
          <button
            id='next_ch_img'
            onClick={() => {
              if (
                password === 'ufsm woods' ||
                password === 'the ufsm woods' ||
                password === 'the woods' ||
                password === 'woods' ||
                password === 'UFSM Woods' ||
                password === 'Woods' 
              ) {
                navigate('/thewoods');
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

export default Challenge1note;