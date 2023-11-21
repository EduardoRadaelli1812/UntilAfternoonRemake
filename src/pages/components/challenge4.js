import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const Challenge4 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/challenge4');
    }, []);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  return (
    <div className='ch'>
        <p>Go to the challenge 4, solve it and back here to answer: <a href="https://criadordecruzadinhas.com.br/crossword/652acca9a43a3d005a382004" rel="noopener noreferrer" target="_blank">Challenge 4</a>
        <br></br><br></br>Password: The FIRST word of the crossword</p>
        <input
            type='text'
            placeholder='Password:'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        <Link id='back_ch' to="/dialogue51">BACK</Link>
          <button
            id='next_ch'
            onClick={() => {
              if (
                password === 'hacker' 
              ) {
                navigate('/dialogue52');
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

export default Challenge4;