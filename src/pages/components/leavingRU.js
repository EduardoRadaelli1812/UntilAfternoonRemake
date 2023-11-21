import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const LeavingRU = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/leavingRU');
    }, []);
  return (
    <div className='text'>
        <p>Leaving the UR, you said goodbye to Trevor and started walking towards your building. Then you remembered that you hadn't completely lost track: Poliana had said she knew who the hacker was. She had lied it was Trevor, but while you were walking towards the music building, the credits came back. </p>
        <Link to="/dialogue7" id='back_text'>BACK</Link>
        <Link to="/poliana" id='next_text'>NEXT</Link>
    </div>
  );
}

export default LeavingRU;