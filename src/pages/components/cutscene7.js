import { Link } from 'react-router-dom';
import Cut7 from '../../videos/cut_7.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Cutscene7 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/cutscene7');
    }, []);
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={Cut7} type="video/mp4" />
        </video>
          <Link id='back_video' to="/cosmo">BACK</Link>
          <Link id='next_video' to="/challenge5">NEXT</Link>
    </div>
  );
}

export default Cutscene7;