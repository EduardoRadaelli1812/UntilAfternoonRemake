import { Link } from 'react-router-dom';
import Cut_2 from '../../videos/cut_2.mp4';
import '../styles/styles.css';
import { useEffect } from "react";

const Afterchoose1 = () => {
  useEffect(() => {
    localStorage.setItem('lastVisitedPage', '/afterchoose1');
  }, []); 
  return (
    <div className='video'>
    <video autoPlay loop controls>
            <source src={Cut_2} type="video/mp4" />
        </video>
      <Link to="/choose1" id='back_video'>BACK</Link>
      <Link to="/dialogue1" id='next_video'>NEXT</Link>
    </div>
  );
}

export default Afterchoose1;