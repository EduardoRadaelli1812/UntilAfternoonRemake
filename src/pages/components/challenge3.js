import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const Challenge3 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/challenge3');
    }, []);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  return (
    <div className='ch'>
        <p>Go to the challenge 3, solve it and back here to answer: <a href="https://gd.games/instant-builds/cfad36a9-de83-40da-945f-be557c622525" rel="noopener noreferrer" target="_blank">Challenge 3</a>
        <br></br><br></br>Write bellow the password:</p>
        <input
            type='text'
            placeholder='Password:'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        <Link id='back_ch' to="/dialogue41">BACK</Link>
          <button
            id='next_ch'
            onClick={() => {
              if (
                password === 'hatetomatoes' || password === 'Hatetomatoes' || password === 'HATETOMATOES' 
              ) {
                navigate('/dialogue42');
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

export default Challenge3;