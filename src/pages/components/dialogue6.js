import { Link } from 'react-router-dom';
import D6 from '../../videos/d6.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Dialogue6 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/dialogue6');
    }, []);
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={D6} type="video/mp4" />
        </video>
          <Link id='back_video' to="/cutscene8">BACK</Link>
          <Link id='next_video' to="/curriculum">NEXT</Link>
    </div>
  );
}

export default Dialogue6;