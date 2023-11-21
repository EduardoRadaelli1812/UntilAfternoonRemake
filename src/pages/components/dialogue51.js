import { Link } from 'react-router-dom';
import D51 from '../../videos/d51.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Dialogue51 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/dialogue51');
    }, []);
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={D51} type="video/mp4" />
        </video>
          <Link id='back_video' to="/cutscene6">BACK</Link>
          <Link id='next_video' to="/challenge4">NEXT</Link>
    </div>
  );
}

export default Dialogue51;