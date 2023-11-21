import { Link } from 'react-router-dom';
import Cut8 from '../../videos/cut_8.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Cutscene8 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/cutscene8');
    }, []);
  return (
    <div className='video'>
      <video autoPlay loop controls>
        <source src={Cut8} type="video/mp4" />
      </video>
        <Link id='back_video' to="/musicbuilding">BACK</Link>
        <Link id='next_video' to="/dialogue6">NEXT</Link>
    </div>
  );
}

export default Cutscene8;