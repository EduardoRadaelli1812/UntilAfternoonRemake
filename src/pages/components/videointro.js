import { Link } from 'react-router-dom';
import Intro from '../../videos/intro.mp4';
import '../styles/styles.css';
import { useEffect } from "react";

const Videointro = () => {
  useEffect(() => {
    localStorage.setItem('lastVisitedPage', '/videointro');
  }, []);
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={Intro} type="video/mp4" />
        </video>
          <Link to="/narrativa" id='back_video'>BACK</Link>
          <Link to="/choose1" id='next_video'>NEXT</Link>
    </div>
  );
}

export default Videointro;
