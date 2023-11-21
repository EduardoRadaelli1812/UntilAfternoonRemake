import { Link } from 'react-router-dom';
import Cut51 from '../../videos/cut_51.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Cutscene51 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/cutscene51');
    }, []);
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={Cut51} type="video/mp4" />
        </video>
          <Link id='back_video' to="/choose222">BACK</Link>
          <Link id='next_video' to="/publishinghouse">NEXT</Link>
    </div>
  );
}

export default Cutscene51;