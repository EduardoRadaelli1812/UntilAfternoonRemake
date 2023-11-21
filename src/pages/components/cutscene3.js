import { Link } from 'react-router-dom';
import Cut3 from '../../videos/cut_3.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Cutscene3 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/cutscene3');
    }, []);
  
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={Cut3} type="video/mp4" />
        </video>
          <Link id='back_video' to="/question11">BACK</Link>
          <Link id='next_video' to="/challenge1">NEXT</Link>
    </div>
  );
}

export default Cutscene3;