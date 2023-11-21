import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const MelanieSelena = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/melanieSelena');
    }, []);
  return (
    <div className='text'>
        <p>Arriving at the building, you found Melanie and Selena talking. So you decided to ask if any of them knew where Poliana was.</p>
        <Link to="/question22" id='back_text'>BACK</Link>
        <Link to="/dialogue8" id='next_text'>NEXT</Link>
    </div>
  );
}

export default MelanieSelena;