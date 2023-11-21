import { Link } from 'react-router-dom';
import D8 from '../../videos/d8.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Dialogue8 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/dialogue8');
    }, []);
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={D8} type="video/mp4" />
        </video>
          <Link id='back_video' to="/melanieSelena">BACK</Link>
          <Link id='next_video' to="/closer">NEXT</Link>
    </div>
  );
}

export default Dialogue8;