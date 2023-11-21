import { Link } from 'react-router-dom';
import D9 from '../../videos/d9.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Dialogue9 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/dialogue9');
    }, []);
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={D9} type="video/mp4" />
        </video>
          <Link id='back_video' to="/polianahacker">BACK</Link>
          <Link id='next_video' to="/resolved">NEXT</Link>
    </div>
  );
}

export default Dialogue9;