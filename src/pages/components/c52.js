import i2 from "../../images/c5_i2.png";
import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const C52 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/c52');
    }, []);
    const [password2, setPassword2] = useState('');
    const [showText2, setShowText2] = useState(false);

    const navigate = useNavigate();

    const handleForgotPassword2 = () => {
        setShowText2(true);
    };

    const handlePasswordChange2 = (e) => {
        setPassword2(e.target.value);
    };
    return (
        <>
            <div className='c5'>
                <ul id="lista_challenge5">
                    <li>
                        <p>This is Jack. He has been working as a bartender at COSMO since day one. He works on morning shifts. You decide to ask him if he’s aware of what is happening at UFSM with the UR’s blockage access. He says he’s aware of what is happening, but has no information about it. He suggests you ask someone else who works there. I think the _______ is someone who has direct contact with the clients. He could help me.</p>
                        <img src={i2} alt="i2" id='i2' />
                        <input type="text" placeholder="Digite:" value={password2} onChange={handlePasswordChange2} />
                        <button id='button_dica1' onClick={handleForgotPassword2}>Dica</button>
                        {showText2 && <p id='p_dica1'>Who takes and serves customers' orders.</p>}
                    </li>
                </ul>
                <Link id='back_c5' to="/challenge5">BACK</Link>
                <button id='next_c5' onClick={() => {
                    if (
                        password2 === 'waiter'
                    ) { navigate('/c53'); }
                    else { alert('Preencha a lacuna corretamente! OBS: Escreva todo o conteúdo utilizando letras minúsculas'); }
                }}
                >NEXT</button>
            </div>
        </>
    );
}

export default C52;