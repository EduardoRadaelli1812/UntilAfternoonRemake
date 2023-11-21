import { Link } from 'react-router-dom';
import contato1 from "../../images/contato1.png";
import contato2 from "../../images/contato2.png";
import '../styles/styles.css';
import { useEffect } from 'react';

const Contato = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/contato');
    }, []);
  return (
    <div className='contato'>
        <p>LabEON (Laboratório de Ensino e Aprendizagem de Línguas Online)</p>
        <p>E-mail ARG: untilafternoon.arg@gmail.com</p>
        <p id="equipe">EQUIPE</p>
        <img src={contato1} alt="contato1" id='contato1' />
        <img src={contato2} alt="contato2" id='contato2' />
        <Link to="/" id='back_contato'>BACK</Link>
    </div>
  );
}

export default Contato;