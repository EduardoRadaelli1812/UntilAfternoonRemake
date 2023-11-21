import { Link } from 'react-router-dom';
import Cut52 from '../../videos/cut_52.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Cutscene52 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/cutscene52');
    }, []);
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={Cut52} type="video/mp4" />
        </video>
          <Link id='back_video' to="/choose22">BACK</Link>
          <Link id='next_video' to="/dialogue22">NEXT</Link>
    </div>
  );
}

export default Cutscene52;