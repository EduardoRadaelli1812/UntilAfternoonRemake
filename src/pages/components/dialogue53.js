import { Link } from 'react-router-dom';
import D53 from '../../videos/d53.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Dialogue53 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/dialogue53');
    }, []);
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={D53} type="video/mp4" />
        </video>
          <Link id='back_video' to="/cosmopolita">BACK</Link>
          <Link id='next_video' to="/cosmo">NEXT</Link>
    </div>
  );
}

export default Dialogue53;