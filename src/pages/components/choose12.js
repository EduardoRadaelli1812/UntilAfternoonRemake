import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from "react";

const Choose12 = () => {
  useEffect(() => {
    localStorage.setItem('lastVisitedPage', '/choose12');
  }, []);
  return(
    <>   
    <div className='text'>
        <p>You were very angry about what had happened. You really want to try the fish from the UR. Then, You decided to investigate what happened. Now, You are at RU, near where the commotion takes place. At this moment, you saw Podrão beside the credit booth.</p>
        <Link to="/choose1" id='back_text'>BACK</Link>
        <Link to="/afterchoose1" id='next_text'>NEXT</Link>
      </div> 
    </>
  )
}
export default Choose12;