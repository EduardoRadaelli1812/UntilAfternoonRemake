import { Link } from 'react-router-dom';
import Cut6 from '../../videos/cut_6.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Cutscene6 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/cutscene6');
    }, []);
  
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={Cut6} type="video/mp4" />
        </video>
          <Link id='back_video' to="/planetariumqr">BACK</Link>
          <Link id='next_video' to="/dialogue51">NEXT</Link>
    </div>
  );
}

export default Cutscene6;