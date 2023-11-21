import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Choose222 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/choose222');
    }, []);
  return ( 
    <div className='text'>
      <p>Determined to catch the two of them in the act, you went to the rectory.</p>
        <Link to="/dialogue21" id='back_text'>BACK</Link>
        <Link to="/choose22" id='next_text'>NEXT</Link>
    </div>
  );
}

export default Choose222;
