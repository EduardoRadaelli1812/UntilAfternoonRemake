import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Cosmopolita = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/cosmopolita');
    }, []);
  return (
    <div className='text'>
        <p>UFSM's most visited cafe! When you were almost there, a boy with a planet shirt was leaving. “It's him!” You thought.</p>
        <Link to="/dialogue52" id='back_text'>BACK</Link>
        <Link to="/dialogue53" id='next_text'>NEXT</Link>
    </div>
  );
}

export default Cosmopolita;