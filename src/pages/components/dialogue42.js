import { Link } from 'react-router-dom';
import D42 from '../../videos/d42.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Dialogue42 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/dialogue42');
    }, []);
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={D42} type="video/mp4" />
        </video>
          <Link id='back_video' to="/challenge3">BACK</Link>
          <Link id='next_video' to="/planetariumqr">NEXT</Link>
    </div>
  );
}

export default Dialogue42;