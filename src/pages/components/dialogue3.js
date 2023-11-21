import { Link } from 'react-router-dom';
import D3 from '../../videos/d3.mp4';
import '../styles/styles.css';
import { useEffect } from 'react';

const Dialogue3 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/dialogue3');
    }, []);
  return (
    <div className='video'>
        <video autoPlay loop controls>
            <source src={D3} type="video/mp4" />
        </video>
        <Link id='back_video' to="/publishinghouse">BACK</Link>
        <Link id='next_video' to="/textsandwich">NEXT</Link>
    </div>
  );
}

export default Dialogue3;