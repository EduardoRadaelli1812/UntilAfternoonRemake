import { Link } from 'react-router-dom';
import D22 from '../../videos/dialogue22.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Dialogue22 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/dialogue22');
    }, []);
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={D22} type="video/mp4" />
        </video>
          <Link id='back_video' to="/cutscene52">BACK</Link>
          <Link id='next_video' to="/publishinghouse">NEXT</Link>
    </div>
  );
}

export default Dialogue22;