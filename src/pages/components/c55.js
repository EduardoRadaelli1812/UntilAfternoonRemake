import i5 from "../../images/c5_i5.png";
import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const C55 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/c55');
    }, []);
  const [password5, setPassword5] = useState('');
  const [showText5, setShowText5] = useState(false);

  const navigate = useNavigate();

  const handleForgotPassword5 = () => {
    setShowText5(true);
  };
    const handlePasswordChange5 = (e) => {
        setPassword5(e.target.value);
    };

  return (
    <>
        <div className='c5'>
          <ul id="lista_challenge5">
          <li>
            <p>Now you beg the waitress if she remembers the identity of any of these three girls and lucky for you the answer is yes. She looks around and points at the girl sitting by herself at the sofa behind you. You thank the waitress for her help and immediately go interview the second witness. You recognize the girl from the rectory, Poliana. When you ask Poliana what she is doing at Cosmopolita, so far from where you met her, she tells you that she only works as a scholarship holder at the UFSM’s Editora, but her classes happen at CT in the afternoon. You question her if she is on her own, so Poliana mentions her classmate Selena and her work friend Melanie couldn’t be there. You’re surprised to know that Poliana and Selena are colleagues. When you realize the conversation is going in another direction, you ask her about the UR credits. Poliana had not realized this strange interaction could have been connected with the robbery. You tell her you found out three girls were getting UR credits in the middle of this mess. So she admitted: She and her friends discovered the hacker and were blackmailing him in order to keep silent.</p>
            <img src={i5} alt="i5" id='i5' />
            <input type="text" placeholder="Digite:" value={password5} onChange={handlePasswordChange5}/>
            <button id='button_dica1' onClick={handleForgotPassword5}>Dica</button>
          {showText5 && <p id='p_dica1'>He is someone you've already met.</p>}
          </li>
        </ul>
        <Link id='back_c5' to="/c54">BACK</Link>
        <button id='next_c5' onClick={() => { 
            if (
                password5 === 'trevor'
            ) 
              {navigate('/c56');} 
            else 
              {alert('Preencha a lacuna corretamente! OBS: Escreva todo o conteúdo utilizando letras minúsculas');}
            }}
            >NEXT</button>
        </div>
    </>
  );
}

export default C55;