import { Link } from 'react-router-dom';
import D7 from '../../videos/d7.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Dialogue7 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/dialogue7');
    }, []);
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={D7} type="video/mp4" />
        </video>
          <Link id='back_video' to="/accuse">BACK</Link>
          <Link id='next_video' to="/leavingRU">NEXT</Link>
    </div>
  );
}

export default Dialogue7;