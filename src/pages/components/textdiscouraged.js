import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Textdiscouraged = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/textdiscouraged');
    }, []);
  return (
    <div className='text'>
        <p>You left the rectory discouraged. Just as you started to think about giving up again, you caught a glimpse of Podrão Silveira walking towards you with his tongue out but gave up and lay awkwardly in the middle of the path. You ran towards him.</p>
        <Link to="/textsandwich" id='back_text'>BACK</Link>
        <Link to="/dialogue41" id='next_text'>NEXT</Link>
    </div>
  );
}

export default Textdiscouraged;