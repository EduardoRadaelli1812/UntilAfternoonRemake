import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Poliana = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/poliana');
    }, []);
  return (
    <div className='text'>
        <p>This meant that Poliana warned the hacker in the meantime and he returned the credits before he was discovered. So, if you wanted to find out who the hacker was, all you had to do was pressure Poliana to tell you. Poliana had said that she studied at CT, so you should go there to try to find her.</p>
        <Link to="/leavingRU" id='back_text'>BACK</Link>
        <Link to="/question2" id='next_text'>NEXT</Link>
    </div>
  );
}

export default Poliana;