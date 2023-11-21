import { Link } from 'react-router-dom';
import D41 from '../../videos/d41.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Dialogue41 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/dialogue41');
    }, []);
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={D41} type="video/mp4" />
        </video>
          <Link id='back_video' to="/textdiscouraged">BACK</Link>
          <Link id='next_video' to="/challenge3">NEXT</Link>
    </div>
  );
}

export default Dialogue41;