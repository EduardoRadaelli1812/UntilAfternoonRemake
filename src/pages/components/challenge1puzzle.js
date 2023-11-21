import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const Challenge1puzzle = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/challenge1puzzle');
    }, []);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  return (
    <div className='ch'>
        <p>Go to the challenge 1, solve it and back here to answer: <a href="https://www.educaplay.com/learning-resources/16365488-art_movements_matching_game.html" rel="noopener noreferrer" target="_blank">Challenge 1</a>
        <br></br><br></br>Write bellow the password:</p>
        <input
            type='text'
            placeholder='Password:'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        <Link id='back_ch' to="/challenge1">BACK</Link>
        <button
            id='next_ch'
            onClick={() => {
              if (
                password === 'fairy tale' ||
                password === 'Fairy Tale' ||
                password === 'FAIRE TALE'
              ) {
                navigate('/challenge1note');
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

export default Challenge1puzzle;
