import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Publishinghouse = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/publishinghouse');
    }, []);
  return (
    <div className='text'>
        <p>Anne noticed that the room of the UFSM Publishing House had its door open, and there were three girls in the room. Anne went to the nearest one, the name tag said Poliana, to ask for information.</p>
          <Link to="/cutscene51" id='back_text'>BACK</Link>
          <Link to="/dialogue3" id='next_text'>NEXT</Link>
    </div>
  );
}

export default Publishinghouse;