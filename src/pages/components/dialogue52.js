import { Link } from 'react-router-dom';
import D52 from '../../videos/d52.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Dialogue52 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/dialogue52');
    }, []);
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={D52} type="video/mp4" />
        </video>
          <Link id='back_video' to="/challenge4">BACK</Link>
          <Link id='next_video' to="/cosmopolita">NEXT</Link>
    </div>
  );
}

export default Dialogue52;