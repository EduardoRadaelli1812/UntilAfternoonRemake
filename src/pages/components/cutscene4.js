import { Link } from 'react-router-dom';
import Cut4 from '../../videos/cut_4.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Cutscene4 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/cutscene4');
    }, []);
  
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={Cut4} type="video/mp4" />
        </video>
          <Link id='back_video' to="/thewoods">BACK</Link>
          <Link id='next_video' to="/challenge2">NEXT</Link>
    </div>
  );
}

export default Cutscene4;