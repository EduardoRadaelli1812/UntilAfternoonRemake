import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Sobre = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/sobre');
    }, []);
  return (
    <div className='text'>
        <p>Este jogo é um ARG (Alternate Reality Game) que apresenta uma narrative transmídia, com missões e desafios que demandam sua imersão e visitação em locais específicos dentro do Campus da UFSM.</p>
        <Link to="/" id='back_sobre'>BACK</Link>
    </div>
  );
}

export default Sobre;