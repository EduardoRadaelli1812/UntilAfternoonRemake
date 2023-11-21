import { Link } from 'react-router-dom';
import D21 from '../../videos/dialogue21.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Dialogue21 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/dialogue21');
    }, []);
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={D21} type="video/mp4" />
        </video>
          <Link id='back_video' to="/choose21">BACK</Link>
          <Link id='next_video' to="/choose222">NEXT</Link>
    </div>
  );
}

export default Dialogue21;