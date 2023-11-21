import { Link } from 'react-router-dom';
import D1 from '../../videos/D1.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Dialogue1 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/dialogue1');
    }, []);
  
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={D1} type="video/mp4" />
        </video>
          <Link id='back_video' to="/afterchoose1">BACK</Link>
          <Link id='next_video' to="/question1">NEXT</Link>
    </div>
  );
}

export default Dialogue1;